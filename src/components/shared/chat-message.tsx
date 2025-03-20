'use client'

import { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { User, Bot } from 'lucide-react'
import { Copy, Trash, Edit } from 'lucide-react' 


import CodeforgeSvgIcon from '../../../public/svg/logotype'

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
	const [hoveredMessage, setHoveredMessage] = useState<string | null>(null)


	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	if (messages.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center h-full text-gray-500'>
				<h1 className='text-[20px]'>Code Forge</h1>
				<p>No messages yet. Start a conversation!</p>
			</div>
		)
	}

	return (
		<div className='space-y-4 pb-2'>
			{messages.map(message => (
				<div key={message.id} onMouseEnter={() => setHoveredMessage(message.id)} onMouseLeave={() => setHoveredMessage(null)} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
					<div className={`flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
						{message.sender === 'ai' && (
							<div className='flex items-start pr-[10px]'>
								<div className='bg-[#F05656] text-primary-foreground p-1.5 rounded-[10px]'>
									<Bot size={16} />
								</div>
							</div>
						)}

						<div className={`text-[16px] ${message.sender === 'user' ? 'p-3 bg-[#F2F2F2] text-[#364153] rounded-[20px]' : 'text-[#364153]'}`}>
							<p className=''>{message.content}</p>
							{/* <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{format(message.timestamp, 'HH:mm')}</div> */}
						</div>
					</div>
				</div>
			))}
			<div ref={messagesEndRef} />
		</div>
	)
}
