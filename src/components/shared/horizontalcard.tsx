/* importing a next-react module */
import React from 'react'

/* importing a mui module */
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'

interface HorizontalCardProps {
	icon: React.ComponentType<{ size: number; color: string }>
	heading: string
	description: string
	imageUrl: string
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ icon: IconComponent, heading, description, imageUrl }) => {
	return (
		<Box className='backgroundNoiceOrange boxShadowBlack' sx={{ borderRadius: '20px' }}>
			<Grid container spacing={0}>
				<Grid size={{ md: 6, xs: 12 }} sx={{ p: '50px' }}>
					<Box sx={{ backgroundColor: '#FF4D4D', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<IconComponent size={30} color='white' />
					</Box>
					<Typography className='fontInputSansCondensedRegular' component='div' variant='h4' sx={{ color: 'white', py: '20px', fontSize: { lg: '24px', md: '20px', xs: '16px' } }}>
						{heading}
					</Typography>
					<Typography className='fontInputSansExtraLight' variant='h6' component='div' sx={{ color: 'white', fontSize: { lg: '18px', md: '16px', xs: '14px' } }}>
						{description}
					</Typography>
				</Grid>
				<Grid size={{ md: 6, xs: 12 }} sx={{ pr: { xs: '50px', lg: '0' }, pl: { xs: '50px', lg: '50px' }, pt: { xs: '50px', lg: '50px' }, pb: { xs: '0', lg: '50px' } }}>
					<Box sx={{ borderRadius: { xs: '10px', sm: '15px', md: '20px' } }}>
						<img src={imageUrl} alt='image' style={{ width: '100%', borderRadius: 'inherit' }} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}
export default HorizontalCard
