'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from '@/components/ui/sidebar'
import { SidebarContent } from '@/components/ui/sidebar'
import { SidebarFooter } from '@/components/ui/sidebar'
import { DevModeSwitcher } from '../shared/navigation/nav-dev-mods'
import { NavAdditionally } from '../shared/navigation/nav-additionally'
import { NavUser } from '../shared/navigation/nav-user'
import { NavCommunication } from '../shared/navigation/nav-сommunication'
import { NavStartupDev } from '../shared/navigation/nav-startup-dev'
import { NavEnterpriseDev } from '../shared/navigation/nav-enterprise-dev'

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
