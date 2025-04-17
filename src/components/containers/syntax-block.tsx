// src/components/containers/syntax-block.tsx
import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface SyntaxBlockProps {
	request: { [key: string]: any }
	generatedCode: string
}

export function SyntaxBlock({ request, generatedCode }: SyntaxBlockProps) {
	const requestJson = JSON.stringify(request, null, 2)

	return (
		<SyntaxHighlighter language={request.language} style={vs} showLineNumbers wrapLines>
			{generatedCode || '// No code generated yet.'}
		</SyntaxHighlighter>
	)
}
