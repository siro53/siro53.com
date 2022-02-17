import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';

export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyNextPage<T = {}> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
  Component: MyNextPage;
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#f582ae',
    },
    background: {
      default: '#fef6e4',
      paper: '#f3d2c1',
    },
    text: {
      primary: '#001858',
      secondary: '#172c66',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#2979FF',
    },
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      fontSize: 12,
    },
    h6: {
      fontSize: 10,
    },
  },
});

const MyApp: React.FC<MyAppProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
