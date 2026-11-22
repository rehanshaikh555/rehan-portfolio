"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./globe-reveal.css";

export default function GlobeReveal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="globe-reveal"
      aria-label="REHAN SHAIKH"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              clipPath: "inset(0 100% 0 0)",
              y: 12,
              filter: "blur(8px)",
            }
      }
      animate={{
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 1.8,
        delay: reduceMotion ? 0 : 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <span>REHAN SHAIKH</span>
    </motion.div>
  );
}
