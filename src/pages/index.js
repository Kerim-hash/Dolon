import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Advantages from "@/sections/Advantages";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Modules from "@/sections/modules";
import CustomCursor from "@/CustomCursor";
import React, { useEffect, useRef, useState } from "react";


const Home = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Advantages  />
      <Modules />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
