import '../styles/globals.css';
import "locomotive-scroll/src/locomotive-scroll.scss";
import 'react-toastify/dist/ReactToastify.css';

import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Head from "next/head";
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Dolon</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" /> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />
    </Head>

    <GoogleAnalytics measurementId="G-93SP47C5KR" />
    <ToastContainer />
    <Component {...pageProps} />
  </>
);

export default MyApp;
