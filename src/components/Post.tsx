import { Container, Typography } from '@mui/material';
import React from 'react';
import { MDXPosts } from '../posts/mdx-list';

type Props = {
  id: string;
};

const Post: React.FC<Props> = ({ id }) => {
  const MDX = MDXPosts[id];

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>a</Typography>
      <MDX />
    </Container>
  );
};

export default Post;
