import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const texts = ['HOME', 'ABOUT', 'BLOG', 'DIARY'];

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {texts.map((text) => {
            return (
              <Button
                key={text}
                variant='text'
                onClick={() => router.push(`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`)}
              >
                <Typography color='primary.contrastText' sx={{ p: 1 }}>
                  {text}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
