import { useState } from "react";
import Slide from "../Slide";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import styles from "./Layouts.module.css";

export default function Layouts() {
  const [showUnused, setShowUnused] = useState(true);

  const listVariants = {
    visible: {
      opacity: 1,
    },
    fade: {
      opacity: 1,
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
    },
    fade: {
      opacity: 0,
    },
  };

  return (
    <Slide>
      <motion.ul
        className={styles.wrapper}
        onClick={() => setShowUnused((e) => !e)}
        variants={listVariants}
      >
        <LayoutGroup>
          <motion.li>Normal flow</motion.li>

          <motion.li>Positioned layout</motion.li>

          <AnimatePresence>
            {showUnused && (
              <>
                <motion.li variants={itemVariants}>Table layout</motion.li>

                <motion.li variants={itemVariants}>Float layout</motion.li>

                <motion.li variants={itemVariants}>
                  Multi-column layout
                </motion.li>

                <motion.li variants={itemVariants}>
                  Flexible box layout
                </motion.li>

                <motion.li variants={itemVariants}>Grid layout</motion.li>
              </>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.ul>
    </Slide>
  );
}
