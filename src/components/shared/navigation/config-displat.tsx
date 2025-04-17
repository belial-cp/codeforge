'use client'

import * as React from 'react'
import { useCodeConfig } from '@/components/layout/dev-modes/code-config-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'
import { SyntaxBlock } from '@/components/containers/syntax-block'

async function fetchGeneratedCode(request: any, onChunk: (chunk: string) => void) {
	const res = await fetch('http://localhost:5000/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(request),
	})

	const reader = res.body?.getReader()
	const decoder = new TextDecoder('utf-8')

	if (!reader) return

	while (true) {
		const { done, value } = await reader.read()
		if (done) break

		const chunk = decoder.decode(value)
		const lines = chunk.split('\n').filter(Boolean)

		for (const line of lines) {
			const json = JSON.parse(line)
			onChunk(json.response)
		}
	}
}

export function ConfigDisplay() {
	const { config, userQuery, setUserQuery } = useCodeConfig()
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const request = { ...config, userQuery }
	const [codeOutput, setCodeOutput] = useState('')

	useEffect(() => {
		const textarea = textareaRef.current
		if (!textarea) return

		textarea.style.height = '50px'
		textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px'
	}, [userQuery])

	const handleGenerate = async () => {
		setCodeOutput('')
		await fetchGeneratedCode(request, chunk => {
			setCodeOutput(prev => prev + chunk)
		})
	}

	return (
		<div className='space-y-4'>
			<div>
				<Label htmlFor='user-query'>Code Request</Label>
				<Textarea id='user-query' ref={textareaRef} value={userQuery} onChange={e => setUserQuery(e.target.value)} placeholder='Describe what code you want to generate...' className='min-h-[100px]' />
				<Button onClick={handleGenerate} className='mt-2'>
					<Send className='mr-2 h-4 w-4' />
					Generate
				</Button>
			</div>

			<SyntaxBlock request={request} generatedCode={codeOutput} />
		</div>
	)
}
