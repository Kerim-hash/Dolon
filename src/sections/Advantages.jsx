import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  advantages1,
  advantages2,
  advantages3,
  advantages4,
  ArrowRight,
} from "@/assets";
import styles from "@/styles";

const Advantages = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress * 100;
        const roundedProgress = Math.round(progress);
        console.log(roundedProgress);
        progressBarRef.current.value = roundedProgress;
      },
    });
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div  id="Advantages" className="relative">
      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner top-[100px]">
            <div className="scroll-section">
              <div className="bg-white justify-between flex items-center rounded-[16px] section">
                <div className="flex-1 slide-content pl-[40px]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px]">
                    МИНИМУМ ОШИБОК, МАКСИМУМ АВТОМАТИЗАЦИИ
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px]">
                    Благодаря автоматизации и улучшенному алгоритму QA/QC, Dolon
                    уменьшает человеческое участие в процессе, что снижает
                    вероятность ошибок и обеспечивает более точные и надежные
                    результаты. Автоматическая обработка данных и проверка
                    качества выявляют потенциальные проблемы и ошибки в
                    информации, на ранних этапах, в момент загрузки. Dolon
                    обеспечивает надежность и точность в геологическом анализе,
                    что способствует эффективности и успешности работы
                    специалистов в этой области.
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container"
                  src={advantages1}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section">
              <div className="bg-white justify-between flex items-center rounded-[16px] section">
                <div className="flex-1 slide-content pl-[40px]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px]">
                    МИНИМУМ ОШИБОК, МАКСИМУМ АВТОМАТИЗАЦИИ
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px]">
                    Благодаря автоматизации и улучшенному алгоритму QA/QC, Dolon
                    уменьшает человеческое участие в процессе, что снижает
                    вероятность ошибок и обеспечивает более точные и надежные
                    результаты. Автоматическая обработка данных и проверка
                    качества выявляют потенциальные проблемы и ошибки в
                    информации, на ранних этапах, в момент загрузки. Dolon
                    обеспечивает надежность и точность в геологическом анализе,
                    что способствует эффективности и успешности работы
                    специалистов в этой области.
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container"
                  src={advantages2}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section">
              <div className="bg-white justify-between flex items-center rounded-[16px] section">
                <div className="flex-1 slide-content pl-[40px]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px]">
                    МИНИМУМ ОШИБОК, МАКСИМУМ АВТОМАТИЗАЦИИ
                  </h1>
                  <p className="text-[#535354]  max-w-[734px] text-[16px]">
                    Благодаря автоматизации и улучшенному алгоритму QA/QC, Dolon
                    уменьшает человеческое участие в процессе, что снижает
                    вероятность ошибок и обеспечивает более точные и надежные
                    результаты. Автоматическая обработка данных и проверка
                    качества выявляют потенциальные проблемы и ошибки в
                    информации, на ранних этапах, в момент загрузки. Dolon
                    обеспечивает надежность и точность в геологическом анализе,
                    что способствует эффективности и успешности работы
                    специалистов в этой области.
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container"
                  src={advantages3}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section">
              <div className="bg-white justify-between flex items-center rounded-[16px] section">
                <div className="flex-1 slide-content pl-[40px]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px]">
                    МИНИМУМ ОШИБОК, МАКСИМУМ АВТОМАТИЗАЦИИ
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px]">
                    Благодаря автоматизации и улучшенному алгоритму QA/QC, Dolon
                    уменьшает человеческое участие в процессе, что снижает
                    вероятность ошибок и обеспечивает более точные и надежные
                    результаты. Автоматическая обработка данных и проверка
                    качества выявляют потенциальные проблемы и ошибки в
                    информации, на ранних этапах, в момент загрузки. Dolon
                    обеспечивает надежность и точность в геологическом анализе,
                    что способствует эффективности и успешности работы
                    специалистов в этой области.
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container"
                  src={advantages4}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <progress
              className="progress"
              ref={progressBarRef}
              max={100}
              value={0}
            ></progress>
          </div>
          <div className="absolute w-[100%] bottom-0 flex justify-between px-[80px] py-[20px] bg-[#418DFF] max-[600px]:px-[16px]">
            <h5 className="text-[48px] font-bold text-white max-[1200px]:text-[32px] max-[600px]:text-[24px]">
              {" "}
              ПОЛУЧИТЬ ЭКСПЕРТНУЮ КОНСУЛЬТАЦИЮ{" "}
            </h5>
            <Image src={ArrowRight} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
