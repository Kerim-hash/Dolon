import { Module1, Module2, Module3 } from "@/assets";
import ModuleCard from "@/components/ModuleCard";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const Modules = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id={"Packages"}
      className="container pt-[180px] pb-[40px] max-[600px]:pt-[120px]"
    >
      <h1 className="text-black font-bold text-[32px] text-center mb-[40px]">
        МОДУЛИ
      </h1>
      <div className="flex justify-between items-center max-[600px]:flex-col max-[1200px]:overflow-x-scroll max-[1450px]:gap-[30px]">
        <ModuleCard
          img={Module1}
          title={"Пакет СУБД"}
          desc={
            "мощная база данных, идеальное решение для эффективного управления и обработки, мониторинга и анализа данных на всех этапах работы "
          }
          index={1}
        />
        <ModuleCard
          img={Module2}
          title={"3D модуль"}
          desc={
            "полнофункциональный инструмент. Обеспечивает идеальные возможности для точного и эффективного анализа данных"
          }
          index={2}
        />
        <ModuleCard
          img={Module3}
          title={"АПК модуль"}
          desc={
            "эксклюзивное предложение, для автоматического построения каркасов с геологичным алгоритмом"
          }
          index={3}
        />
      </div>
    </motion.div>
  );
};

export default Modules;
