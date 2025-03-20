'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface MessageInputProps {
	onSendMessage: (message: string) => void
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
	const [message, setMessage] = useState('')
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	// Auto-resize the textarea based on content
	useEffect(() => {
		const textarea = textareaRef.current
		if (textarea) {
			textarea.style.height = 'auto'
			const newHeight = Math.min(textarea.scrollHeight, 150) // Max height 150px
			textarea.style.height = `${newHeight}px`
		}
	}, [message])

	const handleSubmit = () => {
		if (message.trim()) {
			onSendMessage(message.trim())
			setMessage('')
			// Reset height after sending
			if (textareaRef.current) {
				textareaRef.current.style.height = 'auto'
			}
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}

	return (
		<div className='w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col'>
			<div className='flex-grow overflow-hidden'>
				<textarea ref={textareaRef} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} placeholder='Type your message...' className='w-full p-3 resize-none outline-none min-h-[50px] max-h-[150px] overflow-y-auto' />
			</div>
			<div className='h-[40px] flex items-center justify-end px-3 bg-white'>
				<button onClick={handleSubmit} className='p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50' disabled={!message.trim()} aria-label='Send message'>
					<Send size={18} />
				</button>
			</div>
		</div>
	)
}
