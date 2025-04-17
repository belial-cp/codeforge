from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from llama_cpp import Llama
import json

app = Flask(__name__)
CORS(app)

# Загружаем модель один раз
llm = Llama(
    model_path="../../core/model/deepseek-coder-6.7b-instruct.Q4_K_S.gguf",
    n_ctx=4096,
    n_threads=8,
)

def format_prompt(config: dict) -> str:
    """
    Формирует текст запроса к модели из JSON-конфига
    """
    user_query = config.pop("userQuery", "").strip()
    if not user_query:
        return "No user query provided."

    settings_lines = [f"{k.replace('_', ' ').capitalize()}: {v}" for k, v in config.items()]
    settings_text = "\n".join(settings_lines)

    return f"""You are Code Forge, an expert code generator.

### User Request:
{user_query}

### Constraints:
{settings_text}

### Response:
"""

@app.route('/generate', methods=["GET", "POST"])
def generate():
    try:
        config = request.json
        if not config:
            return jsonify({'error': 'Request body is required'}), 400

        prompt = format_prompt(config)

        def stream_response():
            for token in llm(prompt, max_tokens=200, stream=True):
                yield json.dumps({'response': token["choices"][0]["text"]}) + '\n'

        return Response(stream_response(), content_type='application/json')

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
