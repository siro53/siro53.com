import { EmotionCache } from '@emotion/cache';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

export type MyNextPage<T = {}> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
  Component: MyNextPage;
};
