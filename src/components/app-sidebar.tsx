'use client'

import * as React from 'react'
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar'
import { DevModeSwitcher } from './nav-dev-mods'
import { NavAdditionally } from './nav-additionally'
import { NavUser } from './nav-user'
import { NavCommunication } from './nav-сommunication'
import { NavStartupDev } from './nav-startup-dev'
import { NavEnterpriseDev } from './nav-enterprise-dev'

import { modes } from '@/data/dev-mode'

export function AppSidebar({ ...props }) {
	const [activeTeam, setActiveTeam] = React.useState(modes[0])

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
