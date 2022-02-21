import { DefaultLayout } from '../../components/DefaultLayout';
import { Box, Container, Typography } from '@mui/material';
import { MyNextPage } from '../../types/myNextPage';

const Blog: MyNextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          m: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant='h2'>記事一覧</Typography>
      </Box>
    </Container>
  );
};

Blog.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Blog;