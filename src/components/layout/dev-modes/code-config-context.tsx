// src/components/layout/dev-modes/code-config-context.tsx
'use client'

import * as React from 'react'

export interface CodeConfig {
	language: string
	indent_style: 'space' | 'tab'
	indent_size: number
	max_line_length: number
	include_comments: boolean
	comment_style: 'inline' | 'block'
	code_complexity: 'simple' | 'intermediate' | 'advanced'
	use_typing: boolean
	use_modern_syntax: boolean
	include_function_docstrings: boolean
	split_into_functions: boolean
	include_main: boolean
	safe_mode: boolean
	include_logging: boolean
	generate_unit_tests: boolean
	test_framework: string
	naming_convention: 'snake_case' | 'camelCase' | 'PascalCase'
	variable_prefix: string
}

interface CodeConfigContextType {
	config: CodeConfig
	userQuery: string
	setConfig: React.Dispatch<React.SetStateAction<CodeConfig>>
	setUserQuery: React.Dispatch<React.SetStateAction<string>>
	updateConfig: (key: keyof CodeConfig, value: any) => void
	generateCode: () => void
	generatedCode: string
}

const defaultConfig: CodeConfig = {
	language: 'python',
	indent_style: 'space',
	indent_size: 4,
	max_line_length: 80,
	include_comments: true,
	comment_style: 'inline',
	code_complexity: 'intermediate',
	use_typing: true,
	use_modern_syntax: true,
	include_function_docstrings: true,
	split_into_functions: true,
	include_main: true,
	safe_mode: true,
	include_logging: false,
	generate_unit_tests: false,
	test_framework: 'pytest',
	naming_convention: 'snake_case',
	variable_prefix: '',
}

export const CodeConfigContext = React.createContext<CodeConfigContextType | undefined>(undefined)

export function CodeConfigProvider({ children }: { children: React.ReactNode }) {
	const [config, setConfig] = React.useState<CodeConfig>(defaultConfig)
	const [userQuery, setUserQuery] = React.useState('')
	const [generatedCode, setGeneratedCode] = React.useState('')

	const updateConfig = React.useCallback((key: keyof CodeConfig, value: any) => {
		setConfig(prev => ({ ...prev, [key]: value }))
	}, [])

	const generateCode = React.useCallback(async () => {
		setGeneratedCode('')
		const requestPayload = { ...config, userQuery }

		try {
			const res = await fetch('http://localhost:5000/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ prompt: JSON.stringify(requestPayload) }),
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
					setGeneratedCode(prev => prev + json.response)
				}
			}
		} catch (err) {
			console.error('Error generating code:', err)
			setGeneratedCode('// Error generating code.')
		}
	}, [config, userQuery])

	const value = React.useMemo(
		() => ({
			config,
			userQuery,
			setConfig,
			setUserQuery,
			updateConfig,
			generateCode,
			generatedCode,
		}),
		[config, userQuery, updateConfig, generateCode, generatedCode]
	)

	return <CodeConfigContext.Provider value={value}>{children}</CodeConfigContext.Provider>
}

export function useCodeConfig() {
	const context = React.useContext(CodeConfigContext)
	if (context === undefined) {
		throw new Error('useCodeConfig must be used within a CodeConfigProvider')
	}
	return context
}
