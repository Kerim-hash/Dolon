import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Image from "next/image";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  

  return (
    <nav className="fixed shadow-md w-full flex px-[24px] py-5 justify-between items-center navbar bg-white z-[9999]">
      <div className="flex items-center">
        <Image src={logo} alt="dolon" width={32} height={32} />
        <motion.h1 variants={textVariant(1.1)} className="text-black font-medium ml-1">Dolon</motion.h1>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] ${
              active === nav.title ? "text-[#72B3E2]" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "translate-x-[-200%]" : "translate-x-[0]"
          } transition-all duration-500 ease-in  p-6 bg-black-gradient absolute top-[70px] right-0 min-w-[140px] rounded-xl sidebar w-full bg-[#76AEF0] h-[95vh]`}
        >
          <ul className="transition-all list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title)
                  setToggle(false)
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
