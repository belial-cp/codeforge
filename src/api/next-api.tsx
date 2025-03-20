import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

export async function POST(request: Request) {
	try {
		const { message } = await request.json()

		// Create a temporary Python script with the user's message
		const pythonScript = `
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "../model"

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

prompt = """${message}"""
messages = [
    {"role": "system", "content": "."},
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
print(response)
    `

		// Save the script to a temporary file
		const fs = require('fs')
		fs.writeFileSync('/tmp/model_script.py', pythonScript)

		// Execute the Python script
		const { stdout, stderr } = await execPromise('python /tmp/model_script.py')

		if (stderr) {
			console.error('Python script error:', stderr)
			return NextResponse.json({ error: 'Error executing model' }, { status: 500 })
		}

		// Return the model's response
		return NextResponse.json({ response: stdout.trim() })
	} catch (error) {
		console.error('API error:', error)
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
	}
}
