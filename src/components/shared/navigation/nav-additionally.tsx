import { SidebarGroup } from '@/components/ui/sidebar'
import { SidebarMenu } from '@/components/ui/sidebar'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarGroupContent } from '@/components/ui/sidebar'
import { SidebarMenuItem } from '@/components/ui/sidebar'

import { additionally } from '@/data/additionally'

export function NavAdditionally() {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{additionally.map(item => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild size='sm' className='rounded-[8px] hover:bg-[#F4F4F5] text-[#3f3f46]'>
								<a href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
