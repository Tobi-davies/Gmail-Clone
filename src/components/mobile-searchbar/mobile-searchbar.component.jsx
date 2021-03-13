import React from "react";
import "./mobile-searchbar.styles.css";
import { motion } from "framer-motion";

const barVariants = {
  hidden: {
    // opacity: 0,
    x: 0,
  },
  visible: {
    x: 200,
    scale: 1.1,
    transition: { type: "tween", duration: 2 },
  },
};

const MobileSearchbar = ({ showMobileNav }) => {
  return (
    <div className="mobile-searchbar">
      <div className="mobile-input-field">
        <input type="text" name="input" placeholder="Search Gmail" />
        <motion.svg
          variants={barVariants}
          initial="hidden"
          animate="visible"
          onClick={() => showMobileNav(true)}
          className="mobile-bar"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            className="bar-line"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          ></path>
        </motion.svg>
        <div className="mobile-T">T</div>
      </div>
    </div>
  );
};

export default MobileSearchbar;
