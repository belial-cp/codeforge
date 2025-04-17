'use client'

import { useState, useCallback } from 'react'

export const useCodeConfig = () => {
	const [config, setConfig] = useState({})
	const [userQuery, setUserQuery] = useState('')

	const generateCode = useCallback(() => {
		console.log('Generating code with query:', userQuery)
	}, [userQuery])

	return {
		config,
		userQuery,
		setUserQuery,
		generateCode,
	}
}
