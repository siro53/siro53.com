import { Box, Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import Post from '../../../core/components/Post';
import { DefaultLayout } from '../../../core/layouts/DefaultLayout';
import { getAllMDXPaths } from '../../../core/utils/myMDX';
import { MyAppProps, MyNextPage } from '../../_app';

type PathParams = {
  id: string;
};

type PageProps = {
  id: string;
};

const PostPage: MyNextPage<PageProps> = ({ id }) => {
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

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { id } = ctx.params as PathParams;

  return {
    props: {
      id: id,
    },
  };
};
