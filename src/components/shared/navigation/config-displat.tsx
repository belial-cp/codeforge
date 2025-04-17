// src/components/shared/navigation/config-display.tsx
'use client'

import * as React from 'react'
import { useCodeConfig } from '@/components/layout/dev-modes/code-config-context'
import { useEffect, useRef } from 'react'
import { SyntaxBlock } from '@/components/containers/syntax-block'

export function ConfigDisplay() {
	const { config, userQuery, generatedCode } = useCodeConfig()
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const request = { ...config, userQuery }

	useEffect(() => {
		const textarea = textareaRef.current
		if (!textarea) return

		textarea.style.height = '50px'
		textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px'
	}, [userQuery])

	return <SyntaxBlock request={request} generatedCode={generatedCode} />
}
