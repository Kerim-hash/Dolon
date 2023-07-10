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

const Hero = () => {
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
    <div className="scroll-section-outer hero">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} pt-[80px] mx-auto flex flex-col max-[600px]:pt-[30px]`}
        >
          <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1
              variants={textVariant(0.1)}
              className={styles.heroHeading}
            >
              ПЕРВОЕ ГГИС ДЛЯ ГОРНОДОБЫВАЮЩЕЙ ПРОМЫШЛЕННОСТИ БЕЗ УСТАНОВКИ НА
              КОМПЬЮТЕР
            </motion.h1>
            <motion.div
              variants={textVariant(0.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className={styles.subTitle}>БЕЗ УСТАНОВКИ НА КОМПЬЮТЕР </h1>
            </motion.div>
          </div>
        </motion.div>
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section flex justify-between items-center max-[600px]:flex-col max-[600px]:h-[95vh]"
            >
              <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                <motion.h6
                  className={styles.infoTitle}
                  variants={textVariant(0.1)}
                >
                  Dolon позволяет загружать, обрабатывать и анализировать
                  геологические данные в реальном времени прямо из веб-браузера
                </motion.h6>
                <motion.div variants={textVariant(0.2)}>
                  <p className={styles.infoDesc}>
                    Открытие новых возможностей, повышение эффективности и
                    увелечение скорости обработки данных - все это становится
                    реальностью с OpenDolon. Первое в мире программное
                    обеспечение, которое открывает двери в будущее
                    горнодобывающей промышленности для квалифицированных
                    специалистов{" "}
                  </p>
                  <a href="#Contacts" className={styles.button}>
                    Получить экспертную консультацию
                  </a>
                </motion.div>
              </div>
              <motion.div variants={fadeIn("left", "tween", 0.1, 1)}>
                <Image src={HeroImgLg} alt="Hero Image" />
              </motion.div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section flex justify-between items-center max-[600px]:flex-col  max-[600px]:h-[95vh]"
            >
              <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                <motion.h6
                  className={styles.infoTitle}
                  variants={textVariant(0.1)}
                >
                  С системой «Долон» 4-5 часов работы специалиста сокращается до
                  рекордных 30 минут.
                </motion.h6>
                <motion.div variants={textVariant(0.2)}>
                  <p className={styles.infoDesc}>
                    "Долон" обеспечивает высокую точность привязки результатов
                    аналитики к соответствующим данным, исключая возможность
                    ошибок и искажений информации. Сократив количество времени
                    для выполнения этой задачи, вы освободите его для других
                    важных задач, повышая общую производительность и
                    эффективность работы на руднике.
                  </p>
                  <a href="#Contacts" className={styles.button}>
                    Получить экспертную консультацию
                  </a>
                </motion.div>
              </div>
              <motion.div variants={fadeIn("left", "tween", 0.2, 2)}>
                <Image src={HeroImgLg} alt="Hero Image" />
              </motion.div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.55 }}
              className="scroll-section flex justify-between items-center max-[600px]:flex-col max-[600px]:h-[95vh]"
            >
              <div className={`${styles.info} max-[600px]:mb-[30px]`}>
                <motion.h6
                  className={styles.infoTitle}
                  variants={textVariant(0.1)}
                >
                  С "Долон" успешный полевой сезон без стресса и проблем.
                </motion.h6>
                <motion.div variants={textVariant(0.2)}>
                  <p className={styles.infoDesc}>
                    Система "Долон" надежный помощник в сборе и систематизации
                    данных геологоразведочных работ. Теперь главный геолог может
                    контролировать весь процесс сбора данных дистанционно, без
                    необходимости быть на месте.
                  </p>
                  <a href="#Contacts" className={styles.button}>
                    Получить экспертную консультацию
                  </a>
                </motion.div>
              </div>
              <motion.div variants={fadeIn("left", "tween", 0.2, 2)}>
                <Image src={HeroImgSecond} alt="Hero Image" />
              </motion.div>
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
