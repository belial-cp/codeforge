'use client'
import { useState } from 'react'
import ChatMessages from '@/components/layout/dev-modes/communicationdev/chat-message'
import MessageInput from '@/components/layout/dev-modes/communicationdev/message-input'

interface Message {
	id: string
	content: string
	sender: 'user' | 'ai'
	timestamp: Date
}

export default function CommunicationDev() {
	const port = 'http://127.0.0.1:5000/generate'
	const [messages, setMessages] = useState<Message[]>([])

	const handleSendMessage = async (content: string) => {
		if (content.trim()) {
			const newMessage: Message = {
				id: Date.now().toString(),
				content,
				sender: 'user',
				timestamp: new Date(),
			}

			setMessages(prev => [...prev, newMessage])

			const aiMessage: Message = {
				id: (Date.now() + 1).toString(),
				content: '',
				sender: 'ai',
				timestamp: new Date(),
			}

			setMessages(prev => [...prev, aiMessage])

			try {
				const response = await fetch(port, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						prompt: content,
					}),
				})

				if (!response.body) throw new Error('No response body')

				const reader = response.body.getReader()
				const decoder = new TextDecoder('utf-8')
				let buffer = ''

				while (true) {
					const { value, done } = await reader.read()
					if (done) break

					buffer += decoder.decode(value, { stream: true })

					const lines = buffer.split('\n')
					buffer = lines.pop() || ''

					for (const line of lines) {
						if (line.trim() === '') continue

						const parsed = JSON.parse(line)
						const token = parsed.response

						setMessages(prev => prev.map(msg => (msg.id === aiMessage.id ? { ...msg, content: msg.content + token } : msg)))
					}
				}
			} catch (error) {
				console.error('Error streaming response:', error)
			}
		}
	}

	return (
		<>
			<main className='flex-grow overflow-y-auto flex justify-center p-4'>
				<div className='w-full max-w-3xl'>
					<ChatMessages messages={messages} />
				</div>
			</main>
			<footer className='flex justify-center py-4 px-4 bg-transparent'>
				<div className='w-full max-w-3xl'>
					<MessageInput onSendMessage={handleSendMessage} />
				</div>
			</footer>
		</>
	)
}
