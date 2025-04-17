import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface SyntaxBlockProps {
	request: { [key: string]: any }
	generatedCode?: string
}

export function SyntaxBlock({ request, generatedCode }: SyntaxBlockProps) {
	const configString = JSON.stringify(request, null, 2)

	return (
		<div className='space-y-6'>
			{generatedCode && (
				<div>
					<h4 className='mb-2 font-semibold'></h4>
					<SyntaxHighlighter className='!m-0 !border-none' language={request.language || 'python'} style={vs} showLineNumbers wrapLines lineNumberStyle={{ color: '#888', marginRight: '10px' }}>
						{generatedCode}
					</SyntaxHighlighter>
				</div>
			)}
		</div>
	)
}
