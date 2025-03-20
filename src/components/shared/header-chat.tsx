import { SidebarTrigger } from '@/components/ui/sidebar'

export default function HeaderChat() {
	return (
		<header className='flex h-[64px] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
			<div className='flex items-center gap-2 px-4'>
				<SidebarTrigger className='-ml-1' />
			</div>
		</header>
	)
}
