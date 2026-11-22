"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./hero-name-reveal.css";

const greeting = "HELLO, I'M";
const name = "REHAN SHAIKH";

export default function HeroMetadata() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="poster-metadata">
      <motion.div
        className="poster-identity"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 1.2,
          delay: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="hero-greeting"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            delay: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {greeting}
        </motion.p>

        <h2 aria-label={`${greeting} ${name}`}>
          {Array.from(name).map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 28, filter: "blur(7px)" }
              }
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 1.65 + index * 0.19,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </div>
  );
}
