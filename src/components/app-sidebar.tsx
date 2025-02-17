'use client'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarHeader } from '@/components/ui/sidebar'
import { SidebarContent } from '@/components/ui/sidebar'
import { SidebarFooter } from '@/components/ui/sidebar'

import { DevModeSwitcher } from './nav-dev-mods'
import { NavAdditionally } from './nav-additionally'
import { NavUser } from './nav-user'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<DevModeSwitcher />
			</SidebarHeader>
			<SidebarContent className='justify-between'>
				<NavAdditionally /> 
				
				<NavAdditionally />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	)
}
