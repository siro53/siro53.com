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
    </Box>
  );
};

Diary.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Diary;
