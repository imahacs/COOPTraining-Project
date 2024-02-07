'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About co-op training" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        One of the objectives of <span className="font-extrabold text-[#b89535]">SHAJV</span> is to achieve the highest
        degree of harmonization of what the student learned during the study
        period and what is required for a user in actual work locations,
        to raise the level of knowledge and skill of the country's
        competencies and enable them to apply knowledge on the ground
        in the actual work environment.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
