import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "@/utils/motion";

const ModuleCard = ({ img, title, desc, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 1)}
      className="2xl:max-w-[538px] max-[1440px]:max-w-[380px] max-[1200px]:min-w-[380px] max-[600px]:max-w-[inherit] max-[600px]:min-w-[auto] max-[1920px]:min-h-[528px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <Image
          className="rounded-t-lg min-h-[340px] max-[600px]:min-h-[160px]"
          src={img}
          alt="module"
        />
      </a>
      <div className="p-5 max-[600px]:p-0">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
