import '../styles/globals.css';
import "locomotive-scroll/src/locomotive-scroll.scss";
import 'react-toastify/dist/ReactToastify.css';
import "react-phone-input-2/lib/style.css";

import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import { appWithTranslation } from 'next-i18next';

const structData = {
  '@context': 'https://dolon.tech/',
  headline: 'Geological and Mining cloud ecosystem',
  description: "'DOLON: an exclusive platform offering unique solutions for all stages of geological projects. Innovative tools and functionality allow for maximum process optimization and high efficiency. Advantages: Discover the key benefits that make DOLON a unique solution for the geological industry. Innovative features, high modeling accuracy, and process optimization.Packages: Tailored purchasing options to meet different needs. We offer comprehensive packages that cover all stages of work. Testimonials: Explore the experiences of other companies. Learn how we helped them improve efficiency and achieve successful results.Contact: Get in touch to obtain additional information about DOLON, ask questions, or discuss the specific requirements of your project. We are ready to assist and explore collaboration opportunities.',"
};

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Dolon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />
      <script
        key="structured-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
      />
    </Head>

    <GoogleAnalytics measurementId="G-93SP47C5KR" />
    <ToastContainer />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
