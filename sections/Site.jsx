'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Site = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| The site" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Where is the site?
          </>
        )}
        textStyles="text-center text-[#1d1f22]"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute top-40 left-[49%] w-[40px] h-[50px] p-[6px] rounded-full ">
          <a href="https://www.google.com/maps/place/The+Line+City+(NEOM)/@28.1123081,35.1475023,17z/data=!3m1!4b1!4m6!3m5!1s0x15ab7f94906d1813:0x6a83726f86749db3!8m2!3d28.1123081!4d35.1475023!16s%2Fg%2F11ssz395tk?entry=ttu"> <img src="people-03.png" alt="location" className="w-full h-full" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Site;
