import React from 'react';
import { DefaultLayout } from '../../components/DefaultLayout';
import { MyNextPage } from '../../types/myNextPage';
import { Box, Typography } from '@mui/material';

const Diary: MyNextPage = () => {
  return (
    <Box
      sx={{
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h2'>coming soon...</Typography>
      <Box sx={{ mt: 4, justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='body1'>(非公開日記の予定地です)</Typography>
      </Box>
    </Box>
  );
};

Diary.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Diary;
