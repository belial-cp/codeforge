import type { Metadata } from 'next'
import '../assets/globals.css'

export const metadata: Metadata = {
	title: 'Code Forge',
	description: 'belial-cp',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
