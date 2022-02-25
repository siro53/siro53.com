import { DefaultLayout } from '../../components/DefaultLayout';
import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { MyNextPage } from '../../types/myNextPage';
import { PostMetaData } from '../../types/PostMetaData';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import metaData from '../../../metadata.blog.json';

type Props = {
  metaList: PostMetaData[];
};

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  const allMetaData = metaData as PostMetaData[];
  const props: Props = {
    metaList: allMetaData as PostMetaData[],
  };
  return { props };
};

const Blog: MyNextPage<Props> = ({ metaList }) => {
  const router = useRouter();
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          mt: 8,
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant='h1'>記事一覧</Typography>
      </Box>
      <Divider />
      <List>
        {metaList.map(({ id, title, date }) => {
          return (
            <ListItem key={id}>
              <ListItemButton onClick={() => router.push(`/blog/${id}`)}>
                <ListItemText
                  primary={title}
                  secondary={date}
                  primaryTypographyProps={{
                    variant: 'h2',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

Blog.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Blog;
