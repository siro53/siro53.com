import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

export const DefaultLayout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>siro53&apos;s page</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Header />
      {children}
    </>
  );
};
