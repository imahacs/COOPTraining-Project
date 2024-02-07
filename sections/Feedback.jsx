'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn, footerVariants } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[50px] text-[30px] ">
          Register for co-op training
        </h4>
        <a href="mailto:suliamanmaha@gmail.com">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#b89535] rounded-[32px] gap-[12px]">
            <img
              src="/email.png"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Registration

            </span>
          </button>
        </a>
      </div>
    </motion.footer>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >

        <div className="feedback-gradient" />

        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px]">
            Our vision
          </h4>

        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] ">
          “We have provided training opportunities for distinguished students in partnership with the University of Tabuk to give them an actual work environment where they are trained within a team led by the best talents in all fields”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/commint.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/neom-logo.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
