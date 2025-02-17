'use client'

import { BadgeCheck } from 'lucide-react'
import { Bell } from 'lucide-react'
import { ChevronsUpDown } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { LogOut } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { DropdownMenuGroup } from '@/components/ui/dropdown-menu'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { SidebarMenu } from '@/components/ui/sidebar'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarMenuItem } from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'

import { user } from '@/data/user'

export function NavUser() {
	// const { isMobile } = useSidebar()
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size='lg' className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<Avatar className='h-8 w-8 rounded-[8px]'>
								<AvatarImage src={user.avatar} alt={user.name} />
								<AvatarFallback className='rounded-[8px]'>{user.abbreviation}</AvatarFallback>
							</Avatar>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold'>{user.name}</span>
								<span className='truncate text-xs text-[#3D3A38]'>{user.email}</span>
							</div>
							<ChevronsUpDown className='ml-auto size-4' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent side='right' align='start' sideOffset={5} className='bg-[white] w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-[10px]'>
						<DropdownMenuLabel className='p-0 font-normal'>
							<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
								<Avatar className='h-8 w-8 rounded-[8px]'>
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback className='rounded-[8px]'>{user.abbreviation}</AvatarFallback>
								</Avatar>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-semibold'>{user.name}</span>
									<span className='truncate text-xs text-[#3D3A38]'>{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator className='bg-[#F4F4F5]' />
						<DropdownMenuGroup className='rounded-[8px] hover:bg-[#FFE8D6]'>
							<DropdownMenuItem className='!text-[#f97316]'>
								<Sparkles />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator className='bg-[#F4F4F5]' />
						<DropdownMenuGroup className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<DropdownMenuItem className='!text-[#3D3A38]'>
								<BadgeCheck />
								Account
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuGroup className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<DropdownMenuItem className='!text-[#3D3A38]'>
								<CreditCard />
								Billing
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuGroup className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<DropdownMenuItem className='!text-[#3D3A38]'>
								<Bell />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator className='bg-[#F4F4F5]' />
						<DropdownMenuGroup className='rounded-[8px] hover:bg-[#F4F4F5]'>
							<DropdownMenuItem className='!text-[#3D3A38]'>
								<LogOut />
								Log out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
