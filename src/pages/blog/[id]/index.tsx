import { Box, Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import Post from '../../../components/Post';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { getAllMDXPaths } from '../../../utils/myMDX';
import { MyNextPage } from '../../../types/myNextPage';

type PathParams = {
  id: string;
};

type Props = {
  id: string;
};

const PostPage: MyNextPage<Props> = ({ id }) => {
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
        <Post id={id} />
      </Box>
    </Container>
  );
};

PostPage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default PostPage;

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const allMDXPaths = getAllMDXPaths();
  return {
    paths: allMDXPaths.map((path) => ({
      params: {
        id: path,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { id } = ctx.params as PathParams;

  return {
    props: {
      id: id,
    },
  };
};
