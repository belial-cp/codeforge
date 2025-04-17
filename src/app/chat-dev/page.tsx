'use client'

import React, { useState } from 'react'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import HederSmall from '@/components/layout/header-small'
import CommunicationDev from '@/components/layout/dev-modes/communication'
import StartupDev from '@/components/layout/dev-modes/startup-dev'
import EnterpriseDev from '@/components/layout/dev-modes/enterprise-dev'
import { CodeConfigProvider } from '@/components/layout/dev-modes/code-config-context'

import { modes } from '@/data/dev-mode'

export default function Page() {
	const [activeTeam, setActiveTeam] = useState(modes[0])

	return (
		<CodeConfigProvider>
			<SidebarProvider>
				<AppSidebar activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
				<SidebarInset>
					<div className='h-screen flex flex-col'>
						<HederSmall />
						{activeTeam.name === 'Communication' && <CommunicationDev />}
						{activeTeam.name === 'Startup dev.' && <StartupDev />}
						{activeTeam.name === 'Enterprise dev.' && <EnterpriseDev />}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</CodeConfigProvider>
	)
}
