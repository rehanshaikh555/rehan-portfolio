"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./hero-name-reveal.css";

export default function HeroMetadata() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="poster-metadata">
      <div className="poster-identity">

        <div className="hero-text-mask hero-greeting-mask">
          <motion.p
            className="hero-greeting"
            initial={reduceMotion ? false : {
              y: "110%",
              opacity: 0,
              filter: "blur(8px)",
            }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.25,
              delay: reduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            HELLO, I'M
          </motion.p>
        </div>

        <div className="hero-text-mask hero-name-mask">
          <motion.h2
            className="hero-name-scan"
            aria-label="REHAN SHAIKH"
            initial={reduceMotion ? false : {
              clipPath: "inset(0 100% 0 0)",
              opacity: 0.35,
              filter: "blur(10px)",
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: reduceMotion ? 0 : 2.2,
              delay: reduceMotion ? 0 : 0.85,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            REHAN SHAIKH
          </motion.h2>
        </div>

      </div>
    </div>
  );
}
