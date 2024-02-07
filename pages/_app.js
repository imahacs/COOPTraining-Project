import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Coop Training</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" sizes="32x32" href="/neom-logo.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
