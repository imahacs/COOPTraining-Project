'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeaturestow } from '../constants';
import { TitleText, TypingText, StartSteps } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const ProgramAdvantages = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| You will get" />
        <TitleText title={<>Program advantages?</>}
          textStyles="text-[#1d1f22]"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {
            startingFeaturestow.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}

              />
            ))
          }
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default ProgramAdvantages;
