from llama_cpp import Llama

class ModelInference:
    def __init__(self, model_path, context_size=4096, n_threads=8):
        self.llm = Llama(
            model_path=model_path,
            n_ctx=context_size,
            n_threads=n_threads
        )

    def set_role(self, role):
        self.role = role

    def run_inference(self, instruction, max_tokens=200):
        if not hasattr(self, 'role'):
            raise ValueError("Role is not set. Please set the role using set_role method.")

        prompt = f"### Instruction: {instruction}\n\n### Response:\n{self.role}: "
        output = self.llm(prompt, max_tokens=max_tokens)

        return output["choices"][0]["text"]

# Пример использования
model_path = "../model/deepseek-coder-6.7b-instruct.Q4_K_S.gguf"
inference = ModelInference(model_path)

# Установите роль модели
inference.set_role("Assistant")

# Запустите инференс
instruction = "Write a Python function that reverses a string"
output = inference.run_inference(instruction)

print(output)
