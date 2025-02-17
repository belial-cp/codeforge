import { BotMessageSquare } from 'lucide-react'
import { Box } from 'lucide-react'
import { Boxes } from 'lucide-react'

export const modes = [
		{
			name: 'Communication',
			logo: BotMessageSquare,
			plan: 'Free',
			isActive: true,
		},
		{
			name: 'Startup dev.',
			logo: Box,
			plan: 'Startup',
			isActive: false,
		},
		{
			name: 'Enterprise dev.',
			logo: Boxes,
			plan: 'Enterprise',
			isActive: false,
		},
]