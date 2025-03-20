'use client'

import { useState } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import axios from 'axios'
import MessageInput from '@/components/shared/message-input'
import ChatMessages from '@/components/shared/chat-message'

interface Message {
	id: string
	content: string
	sender: 'user' | 'ai'
	timestamp: Date
}

export default function Page() {
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

			try {
				const response = await axios.post('http://127.0.0.1:5000/generate', {
					prompt: content,
				})

				const aiResponse: Message = {
					id: (Date.now() + 1).toString(),
					content: response.data.response,
					sender: 'ai',
					timestamp: new Date(),
				}
				setMessages(prev => [...prev, aiResponse])
			} catch (error) {
				console.error('Error generating response:', error)
			}
		}
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className='h-screen flex flex-col'>
					<header className='flex h-[64px] shrink-0 items-center border-b px-4'>
						<SidebarTrigger className='-ml-1' />
					</header>

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
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}