'use client'

import * as React from 'react'
import { CodeConfigProvider } from './code-config-context'
import { ConfigDisplay } from '@/components/layout/dev-modes/startupdev/config-display'

export default function StartupDev() {
	return (
		<>
			<ConfigDisplay />
		</>
	)
}
