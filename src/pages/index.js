import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Advantages from "@/sections/Advantages";
import Animation from "@/sections/Animation";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Modules from "@/sections/modules";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useRef, useState } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'hero',
        'common',
        'advantages',
        "module",
        "reviews",
        "contact",
        "footer",
      ])),
    },
  }
}

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { t, i18n  } = useTranslation()
  return (
    <>
      <Navbar t={t} locale={props.locale} i18n={i18n} />
      <Hero t={t} />
      <Animation />
      <Advantages t={t} />
      <Modules t={t} />
      <Reviews t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
};

export default Home;
