'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from '@/components/ui/sidebar'
import { SidebarContent } from '@/components/ui/sidebar'
import { SidebarFooter } from '@/components/ui/sidebar'
import { DevModeSwitcher } from './navigation/nav-dev-mods'
import { NavAdditionally } from './navigation/nav-additionally'
import { NavUser } from './navigation/nav-user'
import { NavCommunication } from './dev-modes/communicationdev/navigation/nav-сommunication'
import { NavStartupDev } from './dev-modes/startupdev/navigation/nav-startup-dev'
import { NavEnterpriseDev } from './dev-modes/enterpricedev/navigation/nav-enterprise-dev'

import { Mode } from '@/data/dev-mode'

interface AppSidebarProps {
	activeTeam: Mode
	setActiveTeam: React.Dispatch<React.SetStateAction<Mode>>
}

export function AppSidebar({ activeTeam, setActiveTeam, ...props }: AppSidebarProps) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<DevModeSwitcher activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
			</SidebarHeader>
			<SidebarContent className='justify-between'>
				{activeTeam.name === 'Communication' && <NavCommunication />}
				{activeTeam.name === 'Startup dev.' && <NavStartupDev />}
				{activeTeam.name === 'Enterprise dev.' && <NavEnterpriseDev />}
				<NavAdditionally />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	)
}