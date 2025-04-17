import { SidebarTrigger } from '@/components/ui/sidebar'

export default function HeaderSmall() {
	return (
		<header className='flex h-[64px] shrink-0 items-center border-b px-4'>
			<SidebarTrigger className='-ml-1' />
		</header>
	)
}
