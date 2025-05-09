from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from llama_cpp import Llama
import json

app = Flask(__name__)
CORS(app)

# Загрузка модели
llm = Llama(
    model_path="../../core/model/deepseek-coder-6.7b-instruct.Q4_K_S.gguf",
    n_ctx=4096,
    n_threads=8,
)

@app.route('/generate', methods=["GET", "POST"])
def generate():
    prompt = request.json.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    system_message = "Your name is Code Forge. You are an assistant for programming."
    user_message = f"{system_message}\n\n### Instruction: {prompt}\n\n### Response:"

    def generate_response():
        output = llm(user_message, max_tokens=256, stream=True)
        for token in output:
            yield json.dumps({'response': token["choices"][0]["text"]}) + '\n'

    return Response(generate_response(), content_type='application/json')

if __name__ == '__main__':
    app.run(debug=True)
