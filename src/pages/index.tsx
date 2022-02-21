import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MyNextPage } from './_app';
import { DefaultLayout } from '../components/DefaultLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@mui/material';
import ExternalLink from '../components/ExternalLink';

const Home: MyNextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h1' component='h1'>
          Welcome to siro53&apos;s page !
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Image src='/myIcon.png' alt='myIcon' width={150} height={150} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={6}>
            <Grid item>
              <ExternalLink url='https://github.com/siro53'>
                <FontAwesomeIcon icon={faGithub} size='2x' color='#000000' />
              </ExternalLink>
            </Grid>
            <Grid item>
              <ExternalLink url='https://twitter.com/shiro537'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='#03a9f4' />
              </ExternalLink>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='body1'>siro53のホームページです。ブログや日記などの置き場所になる予定。</Typography>
        </Box>
      </Box>
    </Container>
  );
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
