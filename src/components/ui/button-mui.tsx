import React from 'react'
import Button from '@mui/material/Button'
import { SxProps, Theme } from '@mui/system'

interface ButtonMUIProps {
	className?: string
	title: string
	sx?: SxProps<Theme>
}

export const ButtonMUI: React.FC<ButtonMUIProps> = ({ className, title, sx }) => {
	return (
		<Button variant='text' disableElevation disableRipple className={className} sx={{ backgroundColor: 'transparent', textTransform: 'none', ...sx }}>
			{title}
		</Button>
	)
}
