import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container direction='row' justifyContent='flex-end' alignItems='flex-end'>
          <Grid item xs={1}>
            <Button variant='text' onClick={() => router.push('/')}>
              <Typography fontWeight={700} color='primary.contrastText'>
                Home
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='text' onClick={() => router.push('/about')}>
              <Typography fontWeight={700} color='primary.contrastText'>
                About
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='text' onClick={() => router.push('/blog')}>
              <Typography fontWeight={700} color='primary.contrastText'>
                Blog
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant='text' onClick={() => router.push('/diary')}>
              <Typography fontWeight={700} color='primary.contrastText'>
                Diary
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
