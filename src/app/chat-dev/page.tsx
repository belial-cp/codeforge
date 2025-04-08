'use client'

import * as React from 'react'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import HederSmall from '@/components/layout/header-small'
import CommunicationDev from '@/components/layout/dev-modes/communication'
import StartupDev from '@/components/layout/dev-modes/startup-dev'
import EnterpriseDev from '@/components/layout/dev-modes/enterprise-dev'

import { modes } from '@/data/dev-mode'

export default function Page() {
	const [activeTeam, setActiveTeam] = React.useState(modes[0])

	const renderDevModeComponent = () => {
		switch (activeTeam.name) {
			case 'Communication':
				return <CommunicationDev />
			case 'Startup dev.':
				return <StartupDev />
			case 'Enterprise dev.':
				return <EnterpriseDev />
			default:
				return <CommunicationDev />
		}
	}

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className='h-screen flex flex-col'>
					<HederSmall />
					{renderDevModeComponent()}
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}