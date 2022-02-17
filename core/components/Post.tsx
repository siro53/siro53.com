import { Container, Typography } from '@mui/material';
import React from 'react';
import { MDXPosts } from '../../posts/mdx-list';

type Props = {
  id: string;
  title: string;
};

const Post: React.FC<Props> = ({ id, title }) => {
  const MDX = MDXPosts[id];

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>{title}</Typography>
      <MDX />
    </Container>
  );
};

export default Post;
