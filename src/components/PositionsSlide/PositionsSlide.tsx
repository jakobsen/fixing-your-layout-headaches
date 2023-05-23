import { useState } from "react";
import Slide from "../Slide";
import { AnimationProps, motion } from "framer-motion";

type Variants = "notYetJoked" | "joked";

export default function PositionsSlide() {
  const [currentVariant, setCurrentVariant] = useState<Variants>("notYetJoked");

  const variants: AnimationProps["variants"] = {
    notYetJoked: {
      textDecoration: "none",
      opacity: 1,
    },
    joked: {
      textDecoration: "line-through",
      opacity: 0.2,
    },
  };

  return (
    <Slide>
      <div onClick={() => setCurrentVariant("joked")}>
        <h2
          style={{
            fontSize: "3rem",
            fontFamily: "Iosevka",
            marginRight: "3rem",
          }}
        >
          position:
        </h2>
        <ul
          style={{
            fontSize: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontFamily: "Iosevka",
          }}
        >
          <li>static</li>
          <li>relative</li>
          <li>absolute</li>
          <li>sticky</li>
          <li>fixed</li>
          <motion.li variants={variants} animate={currentVariant}>
            where-i-want-it
          </motion.li>
        </ul>
      </div>
    </Slide>
  );
}
