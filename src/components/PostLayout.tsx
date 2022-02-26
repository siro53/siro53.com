import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import Head from 'next/head';
import { PostMetaData } from '../types/PostMetaData';
import { Header } from './Header';

type Props = {
  children: any;
  meta: PostMetaData;
};

export const PostLayout: NextPage<Props> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link href='/favicon.ico' rel='icon' />
        <meta property='og:image' content={meta.ogp} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='og:url' content= {`${meta.domain}/${meta.type}/${meta.id}`} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={meta.title} /> 
        <meta property='og:description' content={meta.title}/> 
        <meta property='og:site_name' content="siro53's page"/>
      </Head>

      <Header />

      {/* KaTeX */}
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
        integrity='sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X'
        crossOrigin='anonymous'
      />
      {/* syntax highlight (Prism.js) */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism-okaidia.min.css'
        crossOrigin='anonymous'
      />

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
          <Box component='span' sx={{ p: 1, borderBottom: 1, borderBottomColor: '#9e9e9e' }}>
            <Typography variant='h1'>{meta.title}</Typography>
            <Box sx={{ pt: 1 }}>{meta.date}</Box>
          </Box>
          {children}
        </Box>
      </Container>
    </>
  );
};
