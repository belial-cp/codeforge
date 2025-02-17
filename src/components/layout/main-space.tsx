'use client'
/* importing a next-react module */
import { useRouter } from 'next/navigation'

/* importing a icons */
import { SquareFunction } from 'lucide-react'

/* importing a mui module */
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'

/* importing a custom module */
import DividerSvg from '../../../public/svg/divider'
import styles from '../../styles/mainSpace.module.css'
import HorizontalCard from '../shared/horizontalcard'
import VerticalCard from '../shared/verticalсard'

export default function MainSpace() {
	const router = useRouter()
	return (
		<>
			<Container className='backgroundNoiseBlack' maxWidth={false} sx={{ borderBottom: '1px solid rgba(128, 128, 128, 0.5)' }}>
				<Container>
					<Grid container spacing={0} sx={{ py: '25%' }}>
						<Grid size={1} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)', py: '25px' }} />
						<Grid size={{ md: 3, xs: 2 }} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={{ md: 4, xs: 6 }} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderLeft: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={{ md: 3, xs: 2 }} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={1} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderLeft: '1px dashed rgba(128, 128, 128, 0.5)' }} />

						<Grid size={1} sx={{ borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={10}>
							<Box sx={{ position: 'relative' }}>
								<Typography sx={{ fontSize: { lg: '80px', md: '70px', xs: '50px' }, p: '10px' }} className={`${styles.welcomeTitle} fontInputSansCondensedRegular`} variant='h2' align='center'>
									Welcome to Code Forge
								</Typography>
								<svg
									aria-hidden='true'
									fill='none'
									height='75'
									viewBox='0 0 75 75'
									width='75'
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										transform: 'translate(-50%, -50%)',
									}}
								>
									<path d='M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74' stroke='rgba(128, 128, 128, 0.5)' strokeDasharray='2 2' />
								</svg>
							</Box>
						</Grid>
						<Grid size={1} sx={{ borderLeft: '1px dashed rgba(128, 128, 128, 0.5)' }} />

						<Grid size={1} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderTop: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={10} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderTop: '1px dashed rgba(128, 128, 128, 0.5)' }}>
							<Box>
								<Typography sx={{ fontSize: { lg: '24px', md: '20px', xs: '16px' }, color: 'white', p: '10px' }} className='fontInputSansExtraLight' variant='h5' align='center'>
									Create, learn, and implement ideas with ease! Code Forge: Your key to simple and effective programming!
								</Typography>
							</Box>
						</Grid>
						<Grid size={1} sx={{ borderBottom: '1px dashed rgba(128, 128, 128, 0.5)', borderTop: '1px dashed rgba(128, 128, 128, 0.5)', borderLeft: '1px dashed rgba(128, 128, 128, 0.5)' }} />

						<Grid size={1} sx={{ borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={{ md: 3, xs: 2 }} />
						<Grid size={{ md: 4, xs: 6 }} sx={{ borderLeft: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }}>
							<Box className={styles.buttonContainer} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
								<Button
									className='fontMenlo'
									variant='contained'
									size='large'
									sx={{
										zIndex: 2,
										m: '20px',
										textTransform: 'none',
										borderColor: '#FF4D4D',
										color: '#000000',
										backgroundColor: '#FF4D4D',
										'&:hover': {
											backgroundColor: '#B23738',
										},
									}}
									onClick={() => router.push('/chat-dev')}
								>
									Get Started
								</Button>
								<svg
									aria-hidden='true'
									fill='none'
									height='75'
									viewBox='0 0 75 75'
									width='75'
									style={{
										position: 'absolute',
										bottom: 0,
										right: 0,
										transform: 'translate(50%, 50%) rotate(180deg)',
									}}
								>
									<path d='M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74' stroke='rgba(128, 128, 128, 0.5)' strokeDasharray='2 2' />
								</svg>
							</Box>
						</Grid>
						<Grid size={{ md: 3, xs: 2 }} />
						<Grid size={1} sx={{ borderLeft: '1px dashed rgba(128, 128, 128, 0.5)' }} />

						<Grid size={1} sx={{ borderTop: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)', py: '25px' }} />
						<Grid size={{ md: 3, xs: 2 }} sx={{ borderTop: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={{ md: 4, xs: 6 }} sx={{ borderTop: '1px dashed rgba(128, 128, 128, 0.5)', borderLeft: '1px dashed rgba(128, 128, 128, 0.5)', borderRight: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={{ md: 3, xs: 2 }} sx={{ borderTop: '1px dashed rgba(128, 128, 128, 0.5)' }} />
						<Grid size={1} sx={{ borderTop: '1px dashed rgba(128, 128, 128, 0.5)', borderLeft: '1px dashed rgba(128, 128, 128, 0.5)' }} />
					</Grid>
				</Container>
				<Container disableGutters>
					<Grid container spacing={4}>
						<Grid size={{ xs: 12, md: 12, lg: 12 }}>
							<HorizontalCard imageUrl={'https://jjji.ru/900x500'} icon={SquareFunction} heading='Random text' description='Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 4 }}>
							<VerticalCard icon={SquareFunction} heading='Random text' description='Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 4 }}>
							<VerticalCard icon={SquareFunction} heading='random text random text' description='Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 4 }}>
							<VerticalCard icon={SquareFunction} heading='random text random text' description='Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' />
						</Grid>
					</Grid>
				</Container>
				<Container sx={{ py: '50px' }}>
					<Typography className='fontInputSansExtraLight' variant='h2' sx={{ color: 'white', textAlign: 'center' }}>
						An engaged software development community
					</Typography>
					<Typography className='fontInputSansExtraLight' variant='h5' sx={{ color: 'white', textAlign: 'center' }}>
						Codewars is a collective effort by its users. They are creators—authoring kata to teach various techniques, solving kata with solutions that enlighten others, and commenting with constructive feedback.
					</Typography>
				</Container>
				<Container
					className='backgroundNoiceRed2x'
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
						p: '50px',
						borderRadius: '20px',
					}}
				>
					<Grid container spacing={4}>
						<Grid size={{ xs: 12, md: 4, lg: 4 }}>
							<Typography className='fontInputSansExtraLight' variant='h2' sx={{ color: 'white', textAlign: 'center' }}>
								75K+
							</Typography>
							<Typography className='fontInputSansExtraLight' variant='subtitle2' sx={{ color: 'white', textAlign: 'center' }}>
								Community members added every month
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 4, lg: 4 }}>
							<Typography className='fontInputSansExtraLight' variant='h2' sx={{ color: 'white', textAlign: 'center' }}>
								1M+
							</Typography>
							<Typography className='fontInputSansExtraLight' variant='subtitle2' sx={{ color: 'white', textAlign: 'center' }}>
								Kata completed every month
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 4, lg: 4 }}>
							<Typography className='fontInputSansExtraLight' variant='h2' sx={{ color: 'white', textAlign: 'center' }}>
								12K+
							</Typography>
							<Typography className='fontInputSansExtraLight' variant='subtitle2' sx={{ color: 'white', textAlign: 'center' }}>
								Kata created by our community
							</Typography>
						</Grid>
					</Grid>
				</Container>
				<Box sx={{ p: '50px' }}>
					<DividerSvg />
				</Box>
			</Container>
		</>
	)
}
