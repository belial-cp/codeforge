/* importing a mui module */
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

/* importing a icons */
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

/* importing a custom module */
import CodeforgeSvgIconText from '../../../public/svg/logotype-text'

const socialMediaLinks = {
	github: 'https://github.com/belial-cp/codeforge',
	gmail: 'j@cipherpol.ru',
}
const footerLinks = [
	{ title: 'PRODUCT', links: ['Features', 'Integrations', 'Pricing', 'FAQ'] },
	{ title: 'COMPANY', links: ['Features', 'Integrations', 'Pricing', 'FAQ'] },
	{ title: 'DEVELOPERS', links: ['Features', 'Integrations', 'Pricing', 'FAQ'] },
]
const languages = ['C', 'C#', 'C++', 'Dart', 'Go', 'Haskell', 'Java', 'JavaScript', 'Kotlin', 'Lua', 'PHP', 'Python', 'R', 'Ruby', 'Rust', 'SQL', 'Scala', 'Solidity', 'Swift', 'TypeScript']

export default function Footer() {
	return (
		<Container maxWidth={false} className='backgroundNoiseBlack'>
			<Container sx={{ borderBottom: '1px solid rgba(128, 128, 128, 0.5)', py: '40px' }}>
				<Grid container spacing={2} justifyContent='space-between'>
					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<Box>
							<CodeforgeSvgIconText />
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: '30px' }}>
								{languages.map(language => (
									<Chip
										className='fontMenlo backgroundNoiceLightGray'
										key={language}
										label={language}
										size='small'
										sx={{
											color: 'white',
											cursor: 'pointer',
											'&:hover': { backgroundColor: '#EA4848 !important' },
										}}
									/>
								))}
							</Box>
						</Box>
					</Grid>
					{footerLinks.map((section, index) => (
						<Grid size={{ xs: 6, sm: 3, md: 2 }} key={index}>
							<Typography className='fontMenlo' variant='subtitle1' gutterBottom sx={{ color: 'white' }}>
								{section.title}
							</Typography>
							{section.links.map((link, idx) => (
								<Link key={idx} href='#' className='styledLink'>
									{link}
								</Link>
							))}
						</Grid>
					))}
					<Grid size={{ xs: 6, sm: 3, md: 2 }}>
						<Typography className='fontMenlo' variant='subtitle1' gutterBottom sx={{ color: 'white' }}>
							SOCIAL MEDIA
						</Typography>
						<IconButton aria-label='GitHub' color='default' component='a' href={socialMediaLinks.github}>
							<GitHubIcon sx={{ color: 'gray', '&:hover': { color: 'white' } }} />
						</IconButton>
						<IconButton aria-label='Gmail' color='default' component='a' href={socialMediaLinks.gmail}>
							<AlternateEmailIcon sx={{ color: 'gray', '&:hover': { color: 'white' } }} />
						</IconButton>
						<IconButton aria-label='GitHub' color='default' component='a' href={socialMediaLinks.github}>
							<GitHubIcon sx={{ color: 'gray', '&:hover': { color: 'white' } }} />
						</IconButton>
						<IconButton aria-label='GitHub' color='default' component='a' href={socialMediaLinks.github}>
							<GitHubIcon sx={{ color: 'gray', '&:hover': { color: 'white' } }} />
						</IconButton>
					</Grid>
				</Grid>
			</Container>
			<Typography className='fontMenlo' variant='body2' color='text.secondary' align='center' sx={{ color: 'gray', py: '10px' }}>
				© 2025 Code Forge. All rights reserved.
			</Typography>
		</Container>
	)
}
