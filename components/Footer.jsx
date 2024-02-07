'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px]">
            SHAJV
          </h4>
          <p className="font-normal text-[14px]  opacity-50">
            Copyright © 2023 - 2024 SHAJV. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com/NEOM">
              <img src="/twitter.png" alt="twitter" className="w-[24px] h-[24px] " />
            </a>

            <a href="https://www.linkedin.com/company/discoverneom/">
              <img src="/linkedin.png" alt="linkedin" className="w-[24px] h-[24px] object-contain cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/discoverneom/">
              <img src="/instagram.png" alt="instagram" className="w-[24px] h-[24px] object-contain cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/NEOM">
              <img src="/facebook.png" alt="facebook" className="w-[24px] h-[24px] object-contain cursor-pointer" />
            </a>

          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
