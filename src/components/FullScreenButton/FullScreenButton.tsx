import Maximize from "../icons/Maximize";
import type { RefObject } from "react";
import styles from "./FullScreenButton.module.css";

interface FullScreenButtonProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export default function FullScreenButton({
  scrollContainerRef,
}: FullScreenButtonProps) {
  function handleClick() {
    if (scrollContainerRef.current == null) return;
    scrollContainerRef.current.requestFullscreen();
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      <Maximize />
    </button>
  );
}
