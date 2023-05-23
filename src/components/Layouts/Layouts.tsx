import { useState } from "react";
import Slide from "../Slide";

import { motion } from "framer-motion";
import styles from "./Layouts.module.css";

export default function LayoutsSlide() {
  const [currentVariant, setCurrentVariant] = useState<"visible" | "hidden">(
    "visible"
  );

  return (
    <Slide>
      <div
        className={styles.wrapper}
        onClick={() =>
          setCurrentVariant((variant) =>
            variant == "visible" ? "hidden" : "visible"
          )
        }
      >
        <ul className={styles.list}>
          <li>Normal flow</li>

          <li>Positioned layout</li>
        </ul>

        <motion.ul
          className={styles.list}
          variants={{
            visible: { height: "auto", opacity: 1 },
            hidden: { height: 0, opacity: 0 },
          }}
          animate={currentVariant}
        >
          <li>Table layout</li>

          <li>Float layout</li>

          <li>Multi-column layout</li>

          <li>Flexible box layout</li>

          <li>Grid layout</li>
        </motion.ul>
      </div>
    </Slide>
  );
}
