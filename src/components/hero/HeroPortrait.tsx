"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import "./portrait-reveal.css";

export default function HeroPortrait() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="poster-portrait" aria-label="Portrait of Rehan Shaikh">
      <motion.div
        className="poster-portrait__reveal"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 36, scale: 1.035 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 1.5,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }
        }
      >
        <Image
          src="/images/portrait/rehan-cutout.png"
          alt="Rehan Shaikh"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 70vw"
          className="poster-portrait__image"
        />
        <div className="poster-portrait__shade" />
      </motion.div>
    </div>
  );
}
