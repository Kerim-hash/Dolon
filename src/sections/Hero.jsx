import { motion } from "framer-motion";

import { useRef, useEffect } from "react";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
import styles from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { HeroImg, HeroImgLg, HeroImgSecond } from "@/assets";

const Hero = ({t}) => {
  const sectionRef = useRef(null);
  const section = useRef(null);
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
        progressBarRef.current.value = roundedProgress;
      },
    });

    let sections = gsap.utils.toArray(".scroll-section--hero");
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
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer hero">
      <div className="container !m-[0px]">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <motion.div
              ref={section}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section--hero flex flex-col justify-between items-center max-[600px]:flex-col max-[600px]:h-[95vh]"
            >
              <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                  variants={textVariant(0.1)}
                  className={styles.heroHeading}
                >
                {t("hero:slide1-title")}
                </motion.h1>
                <motion.div
                  variants={textVariant(0.2)}
                  className="flex flex-row justify-center items-center"
                >
                  <h1 className={styles.subTitle}>
                  {t("hero:slide1-subtitle")}
                  </h1>
                </motion.div>
              </div>
              <div className="flex pt-[80px] items-center max-[600px]:pt-[10px] max-[600px]:flex-col">
                <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                  <motion.h6
                    className={styles.infoTitle}
                    variants={textVariant(0.1)}
                  >
                    {t("hero:slide1-info-title")}
                  </motion.h6>
                  <motion.div variants={textVariant(0.2)}>
                    <p className={styles.infoDesc}>
                    {t("hero:slide1-info-desc")}
                    </p>
                    <a href="#Contacts" className={styles.button}>
                    {t("common:link")}
                    </a>
                  </motion.div>
                </div>
                <motion.div variants={fadeIn("left", "tween", 0.1, 1)}>
                  <Image src={HeroImgLg} alt="Hero Image" className="hero-img"/>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              ref={section}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section--hero flex flex-col justify-between items-center max-[600px]:flex-col  max-[600px]:h-[95vh]"
            >
              <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                  variants={textVariant(0.1)}
                  className={styles.heroHeading}
                >
                   {t("hero:slide2-title")}
                </motion.h1>
                <motion.div
                  variants={textVariant(0.2)}
                  className="flex flex-row justify-center items-center"
                >
                  <h1 className={styles.subTitle}> {t("hero:slide2-subtitle")}</h1>
                </motion.div>
              </div>
              <div className="flex pt-[80px] items-center max-[600px]:pt-[10px] max-[600px]:flex-col">
                <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                  <motion.h6
                    className={styles.infoTitle}
                    variants={textVariant(0.1)}
                  >
                    {t("hero:slide2-info-title")}
                  </motion.h6>
                  <motion.div variants={textVariant(0.2)}>
                    <p className={styles.infoDesc}>
                    {t("hero:slide2-info-desc")}
                    </p>

                    <a href="#Contacts" className={styles.button}>
                    {t("common:link")}
                    </a>
                  </motion.div>
                </div>
                <motion.div variants={fadeIn("left", "tween", 0.2, 2)}>
                  <Image src={HeroImgLg} alt="Hero Image" className="hero-img"/>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              ref={section}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section--hero flex flex-col items-center justify-between  max-[600px]:flex-col max-[600px]:h-[95vh]"
            >
              <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                  variants={textVariant(0.1)}
                  className={styles.heroHeading}
                >
                 {t("hero:slide3-title")}
                </motion.h1>
                <motion.div
                  variants={textVariant(0.2)}
                  className="flex flex-row justify-center items-center"
                >
                  <h1 className={styles.subTitle}>{t("hero:slide3-subtitle")}</h1>
                </motion.div>
              </div>
              <div className="flex pt-[80px] items-center max-[600px]:pt-[10px] max-[600px]:flex-col">
                <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                  <motion.h6
                    className={styles.infoTitle}
                    variants={textVariant(0.1)}
                  >
                  {t("hero:slide3-info-title")}
                  </motion.h6>
                  <motion.div variants={textVariant(0.2)}>
                    <p className={styles.infoDesc}>
                    {t("hero:slide3-info-desc")}
                    </p>
                    <a href="#Contacts" className={styles.button}>
                    {t("common:link")}
                    </a>
                  </motion.div>
                </div>
                <motion.div variants={fadeIn("left", "tween", 0.2, 2)}>
                  <Image src={HeroImgSecond} alt="Hero Image" className="hero-img"/>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="progress-bar">
            <progress
              className="progress"
              ref={progressBarRef}
              max={100}
              value={0}
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
