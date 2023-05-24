import { useState } from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import styles from "./ContainingBlockSlide.module.css";

export default function ContainingBlockSlide() {
  const [finalIndex, setFinalIndex] = useState(1);

  const animationProps = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "auto",
      opacity: 1,
    },
  };

  const listItems = [
    <motion.li {...animationProps} className={styles.listItem}>
      If the <code>position</code> property is{" "}
      <strong>
        <code>static</code>
      </strong>
      ,{" "}
      <strong>
        <code>relative</code>
      </strong>
      , or{" "}
      <strong>
        <code>sticky</code>
      </strong>
      , the containing block is formed by the edge of the <em>content box</em>{" "}
      of the nearest ancestor element that is either{" "}
      <strong>a block container</strong> or{" "}
      <strong>establishes a formatting context</strong>.
    </motion.li>,
    <motion.li {...animationProps} className={styles.listItem}>
      If the <code>position</code> property is{" "}
      <strong>
        <code>absolute</code>
      </strong>
      , the containing block is formed by the edge of the <em>padding box</em>{" "}
      of the nearest ancestor element that has a <code>position</code> value
      other than <code>static</code>.
    </motion.li>,
    <motion.li {...animationProps} className={styles.listItem}>
      If the <code>position</code> property is{" "}
      <strong>
        <code>fixed</code>
      </strong>
      , the containing block is established by the viewport.
    </motion.li>,
  ];

  return (
    <Slide>
      <div
        onClick={() => setFinalIndex((i) => i + 1)}
        className={styles.wrapper}
      >
        <ol className={styles.list}>{listItems.slice(0, finalIndex)}</ol>
        From{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">
          MDN
        </a>
        .
        {finalIndex > listItems.length && (
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.asterisk}
          >
            *
          </motion.div>
        )}
      </div>
    </Slide>
  );
}
