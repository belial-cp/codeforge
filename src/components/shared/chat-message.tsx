'use client'

import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { User, Bot } from 'lucide-react'

interface Message {
	id: string
	content: string
	sender: 'user' | 'ai'
	timestamp: Date
}

interface ChatMessagesProps {
	messages: Message[]
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null)

	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	if (messages.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center h-full text-gray-500'>
				<p>No messages yet. Start a conversation!</p>
			</div>
		)
	}

	return (
		<div className='space-y-4 pb-2'>
			{messages.map(message => (
				<div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
					<div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
						<div className={`flex-shrink-0 flex items-start pt-1 ${message.sender === 'user' ? 'ml-2' : 'mr-2'}`}>
							{message.sender === 'user' ? (
								<div className='bg-primary text-primary-foreground p-1.5 rounded-full'>
									<User size={16} />
								</div>
							) : (
								<div className='bg-muted text-muted-foreground p-1.5 rounded-full'>
									<Bot size={16} />
								</div>
							)}
						</div>

						<div className={`rounded-lg p-3 break-words overflow-hidden ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
							<p className='whitespace-pre-wrap break-all hyphens-auto overflow-wrap-anywhere'>{message.content}</p>
							<div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{format(message.timestamp, 'HH:mm')}</div>
						</div>
					</div>
				</div>
			))}
			<div ref={messagesEndRef} />
		</div>
	)
}
