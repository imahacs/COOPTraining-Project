'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { TitleText } from '../components';

const Hero = () => (
  <section className={`${styles.yPaddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex flex-col"
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[70px] -mt-[64px]"
      >
        <img
          src="/logo.jpg"
          alt="hero_cover"
          className="w-full sm:h-[480px] h-[300px] object-cover  "
        />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title={<>Cooperative Training</>}
          textStyles="text-[#1d1f22]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
