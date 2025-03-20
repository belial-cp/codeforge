from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
from flask_cors import CORS
import torch

app = Flask(__name__)
CORS(app)

# Загрузка модели и токенизатора
model_name = "Qwen/Qwen2.5-Coder-0.5B-Instruct"
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

@app.route('/buba')
def start():
    return 'Hellow'


@app.route('/generate', methods=["GET", "POST"])
def generate():
    # Получение данных из запроса
    prompt = request.json.get('prompt', '')
    
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    messages = [
        {"role": "system", "content": "Your name is Code forge."},
        {"role": "user", "content": prompt}
    ]

    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=True
    )
    model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

    generated_ids = model.generate(
        **model_inputs,
        max_new_tokens=512
    )
    generated_ids = [
        output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
    ]

    response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
