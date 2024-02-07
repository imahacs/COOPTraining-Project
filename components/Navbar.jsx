'use client';

import styles from '../styles';

const Navbar = () => (
  <nav
    className={`nav ${styles.xPaddings} py-8`}
  >
    <div
      className={`${styles.innerWidth} mx-auto  gap-8`}
    >

      <h2 className="font-extrabold text-[24px]  text-[#b89535] text-center ">
        SHAJV
      </h2>
    </div>
  </nav>
);

export default Navbar;
