import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Advantages from "@/sections/Advantages";
import Animation from "@/sections/Animation";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Modules from "@/sections/modules";

import React, { useEffect, useRef, useState } from "react";


const Home = () => {
  useEffect(() => {
    // window.location.href = "http://localhost:3000/"
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Animation />
      <Advantages  />
      <Modules />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
