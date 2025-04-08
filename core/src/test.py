from llama_cpp import Llama

llm = Llama(
    model_path="../model/deepseek-coder-6.7b-instruct.Q4_K_S.gguf",
    chat_format="llama-2"
)

output = llm.create_chat_completion(
    messages =
	[
		{
			"role": "system",
			"content": "You are an assistant who perfectly describes images."
		},
		{
			"role": "user",
            "content": "Describe this image in detail please."
		}
	]
)

print(output)