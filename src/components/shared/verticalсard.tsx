/* importing a next-react module */
import React from 'react'

/* importing a mui module */
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'

interface VerticalCardProps {
	icon: React.ComponentType<{ size: number; color: string }>
	heading: string
	description: string
}

const VerticalCard: React.FC<VerticalCardProps> = ({ icon: IconComponent, heading, description }) => {
	return (
		<Box className='backgroundNoiceGray boxShadowBlack' sx={{ borderRadius: '20px' }}>
			<Grid container spacing={0}>
				<Grid size={12} sx={{ p: '50px' }}>
					<Box className='backgroundNoiceLightGray' sx={{ backgroundColor: '#FF4D4D', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<IconComponent size={30} color='white' />
					</Box>
					<Typography className='fontInputSansCondensedRegular' component='div' variant='h4' sx={{ color: 'white', py: '20px', fontSize: { lg: '24px', md: '20px', xs: '16px' } }}>
						{heading}
					</Typography>
					<Typography className='fontInputSansExtraLight' variant='h6' component='div' sx={{ color: 'white', fontSize: { lg: '18px', md: '16px', xs: '14px' } }}>
						{description}
					</Typography>
				</Grid>
				<Grid size={12} sx={{ pl: '50px', pt: '50px', pr: '50px' }}>
					<Box sx={{ borderRadius: '20px' }}>
						<img src='https://jjji.ru/900x500' alt='вап' />
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}
export default VerticalCard