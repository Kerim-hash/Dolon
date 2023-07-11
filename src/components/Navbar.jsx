import { useState } from "react";

import { close, logo, menu } from "../assets";
import Image from "next/image";
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

import Select from 'react-select';
const Navbar = ({ t, locale, i18n }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "Advantages",
      title: t("common:link1"),
    },
    {
      id: "Packages",
      title: t("common:link2"),
    },
    {
      id: "Reviews",
      title: t("common:link3"),
    },
    {
      id: "Contacts",
      title: t("common:link4"),
    },
  ];
  
  const options = [
    { value: 'ru', label: 'ru' },
    { value: 'en', label: 'en' },
  ];
  const router = useRouter()
  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
    // router.push(`/${selectedOption.value}`)
  };

  return (
    <nav className="fixed shadow-md w-full flex px-[24px] py-5 justify-between items-center navbar bg-white z-[9999] max-[600px]:py-3">
      <a href="#" className="flex items-center">
        <Image src={logo} alt="dolon" width={32} height={32} />
        <motion.h1
          variants={textVariant(1.1)}
          className="text-black font-medium ml-1"
        >
          Dolon
        </motion.h1>
      </a>

      <div className="flex items-center">
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
        <Select
        defaultValue={{value: i18n.language, label: i18n.language}}
        onChange={handleChange}
        className="min-w-[80px] ml-[80px]"
        options={options}
      />
      </div>
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
                  setActive(nav.title);
                  setToggle(false);
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
