'use client'
/* importing a next-react module */
import React from 'react'
import { useState } from 'react'

/* importing a icons */
import { Menu, X } from 'lucide-react'

/* importing a mui module */
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

/* importing a custom module */
import CodeforgeSvgIconText from '../../../public/svg/logotype-text'
import { ButtonMUI } from '../ui/button-mui'

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const handleMenuClick = () => {
		setMenuOpen(prev => !prev)
	}
	const pages = ['Products', 'Pricing', 'Blog', 'Contact']
	return (
		<>
			<AppBar position='fixed' className='backgroundNoiseBlack'>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<CodeforgeSvgIconText />
					<Stack direction='row' spacing='10px' sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<ButtonMUI key={page} sx={{ color: 'gray', '&:hover': { color: 'white' } }} className='fontMenlo' title={page} />
						))}
					</Stack>
					<Stack direction='row' spacing='10px' sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Button
							className='fontMenlo'
							variant='outlined'
							sx={{
								backgroundColor: 'transparent',
								textTransform: 'none',
								color: '#ffffff',
								borderColor: '#ffffff',
								'&:hover': {
									color: '#a3a3a4',
									borderColor: '#a3a3a4',
								},
							}}
						>
							Log in
						</Button>
						<Button
							className='fontMenlo'
							variant='outlined'
							sx={{
								backgroundColor: 'transparent',
								textTransform: 'none',
								color: '#ffffff',
								borderColor: '#EA4848',
								'&:hover': {
									color: '#A3A3A4',
									borderColor: '#A33839',
								},
							}}
						>
							Join
						</Button>
					</Stack>
					<Button onClick={handleMenuClick} sx={{ display: { xs: 'flex', md: 'none' }, backgroundColor: 'transparent' }}>
						{isMenuOpen ? <X color='white' /> : <Menu color='white' />}
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer anchor='top' open={isMenuOpen} onClose={() => setMenuOpen(false)}>
				<Box className='backgroundNoiseBlack' sx={{ width: 'auto' }}>
					<Stack direction='column' spacing='10px'>
						{pages.map(page => (
							<Button
								key={page}
								className='fontMenlo'
								variant='text'
								sx={{
									backgroundColor: 'transparent',
									textTransform: 'none',
									color: '#a3a3a4',
								}}
							>
								{page}
							</Button>
						))}
						<Button
							className='fontMenlo'
							sx={{
								backgroundColor: 'transparent',
								textTransform: 'none',
								color: 'white',
							}}
						>
							Log in
						</Button>
						<Button
							className='fontMenlo'
							variant='text'
							sx={{
								backgroundColor: 'transparent',
								textTransform: 'none',
								color: '#EA4848',
							}}
						>
							Join
						</Button>
					</Stack>
				</Box>
			</Drawer>
		</>
	)
}
