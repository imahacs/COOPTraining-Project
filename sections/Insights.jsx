'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>About NEOM</>} textStyles="text-center text-[#1d1f22]" />
      <div className="mt-[50px] flex flex-col gap-[30px]">

        <motion.div
          variants={fadeIn('up', 'spring', 1)}
          className="flex md:flex-row flex-col gap-4"
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <a href="https://www.neom.com/ar-sa/be-part-of-neom/be-part-of-neom">
                <h4 className="font-normal lg:text-[42px] text-[26px] text-[#1d1f22]">
                  Work in NEOM
                </h4>
              </a>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                NEOM opens with broad prospects for the future, so it offers job opportunities in a variety of sectors.

              </p>
            </div>
            <a href="https://www.neom.com/ar-sa/be-part-of-neom/be-part-of-neom">
              <div
                className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent "
              >
                <img
                  src="mov.png"
                  alt="arrow"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 1)}
          className="flex md:flex-row flex-col gap-4"
        >
          <img
            src="work2.png"
            alt="work"
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <a href="https://careers.neom.com/careers">
                <h4 className="font-normal lg:text-[42px] text-[26px] text-[#1d1f22]">
                  Job opportunities
                </h4>
              </a>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                The land of the future where the greatest minds and the best talent are empowered to embody pioneering ideas and exceed boundaries in a world inspired by imagination.
              </p>
            </div>
            <a href="https://careers.neom.com/careers">
              <div
                className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent "
              >
                <img
                  src="mov.png"
                  alt="arrow"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
