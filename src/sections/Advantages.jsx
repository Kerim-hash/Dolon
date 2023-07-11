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

const Advantages = ({t}) => {
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
    let sections = gsap.utils.toArray(".scroll-section");
    const pin = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: .5,
        snap: 1 / (sections.length - 1),
        end: () => "+=" +triggerRef.current.offsetWidth,
      },
    });
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div id="Advantages" className="relative">
      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner__advantages">
            <div className="scroll-section rounded-md max-[600px]:p-[30px]">
              <div className="bg-white justify-between flex items-center rounded-[16px] section max-[600px]:flex-col max-[758px]:p-[10px]">
                <div className="flex-1 slide-content pl-[40px] max-[600px]:pb-[20px] max-[600px]:pl-[0]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px] max-[600px]:text-[18px]">
                    {t("advantages:card1-title")}
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px] max-[600px]:text-[14px]">
                  {t("advantages:card1-desc")}
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container max-[600px]:h-[150px] max-[600px]:object-cover"
                  src={advantages1}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section rounded-md max-[600px]:p-[30px]">
              <div className="bg-white justify-between flex items-center rounded-[16px] section max-[600px]:flex-col max-[758px]:p-[10px]">
                <div className="flex-1 slide-content pl-[40px] max-[600px]:pb-[20px] max-[600px]:pl-[0]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px] max-[600px]:text-[18px]">
                  {t("advantages:card2-title")}
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px] max-[600px]:text-[14px]">
                  {t("advantages:card2-desc")}
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container max-[600px]:h-[150px] max-[600px]:object-cover"
                  src={advantages2}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section rounded-md max-[600px]:p-[30px]">
              <div className="bg-white justify-between flex items-center rounded-[16px] section max-[600px]:flex-col max-[758px]:p-[10px]">
                <div className="flex-1 slide-content pl-[40px] max-[600px]:pb-[20px] max-[600px]:pl-[0]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px] max-[600px]:text-[18px]">
                  {t("advantages:card3-title")}
                  </h1>
                  <p className="text-[#535354]  max-w-[734px] text-[16px] max-[600px]:text-[14px]">
                  {t("advantages:card3-desc")}
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container max-[600px]:h-[150px] max-[600px]:object-cover"
                  src={advantages3}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
            <div className="scroll-section rounded-md max-[600px]:p-[30px]">
              <div className="bg-white justify-between flex items-center rounded-[16px] section max-[600px]:flex-col max-[758px]:p-[10px]">
                <div className="flex-1 slide-content pl-[40px] max-[600px]:pb-[20px] max-[600px]:pl-[0]">
                  <h1 className="text-[#171717] max-w-[734px] text-[24px] font-bold mb-[20px] max-[600px]:text-[18px]">
                  {t("advantages:card4-title")}
                  </h1>
                  <p className="text-[#535354] max-w-[734px] text-[16px] max-[600px]:text-[14px]">
                  {t("advantages:card4-desc")}
                  </p>
                </div>
                <Image
                  className="rounded-[16px] lg:w-[822px] lg:h-[643px] container max-[600px]:h-[150px] max-[600px]:object-cover"
                  src={advantages4}
                  alt="advantages"
                  width={822}
                  height={643}
                />
              </div>
            </div>
          </div>
          <div className="progress-bar !bottom-[150px] max-[600px]:!bottom-[20px]">
            <progress
              className="progress"
              ref={progressBarRef}
              max={100}
              value={0}
            ></progress>
          </div>
          <a
            href="#Contacts"
            className="absolute w-[100%] bottom-0 flex justify-between px-[80px] py-[20px] bg-[#418DFF] max-[600px]:px-[16px] max-[600px]:py-[10px]"
          >
            <h5 className="text-[48px] font-bold text-white max-[1200px]:text-[32px] max-[600px]:text-[18px]">
              {" "}
              {t("common:link")}
            </h5>
            <Image className="max-[600px]:h-[30px]" src={ArrowRight} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
