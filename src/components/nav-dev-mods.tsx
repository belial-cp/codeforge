'use client'
import * as React from 'react'

import { ChevronsUpDown } from 'lucide-react'
import { Plus } from 'lucide-react'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu } from '@/components/ui/sidebar'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarMenuItem } from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'

import { modes } from '@/data/dev-mode'

export function DevModeSwitcher() {
	const { isMobile } = useSidebar()
	const [activeTeam, setActiveTeam] = React.useState(modes[0])
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size='lg' className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<div className='flex aspect-square size-8 items-center justify-center rounded-[8px] bg-[#18181b]'>
								<activeTeam.logo className='size-4 text-white' />
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold text-[#3f3f46]'>{activeTeam.name}</span>
								<span className='truncate text-xs text-[#3f3f46]'>{activeTeam.plan}</span>
							</div>
							<ChevronsUpDown className='ml-auto' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent side='right' align='start' sideOffset={5} className='bg-white min-w-56 rounded-[8px]'>
						<DropdownMenuLabel className='text-xs text-[#71717a]'>Dev Mode</DropdownMenuLabel>
						{modes.map((mode, index) => (
							<div className='rounded-[8px] hover:bg-[#F4F4F5]' key={mode.name}>
								<DropdownMenuItem className='gap-2 p-2' key={mode.name} onClick={() => setActiveTeam(mode)}>
									<div className='flex size-6 items-center justify-center rounded-[4px] border text-[bg-[#18181b]'>
										<mode.logo className='size-4 shrink-0' />
									</div>
									{mode.name}
									<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
								</DropdownMenuItem>
							</div>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
