"use client";

import { motion, useReducedMotion } from "framer-motion";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroTypography() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="poster-typography"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.22,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <motion.p
        className="poster-eyebrow"
        variants={revealVariants}
      >
        <span /> INDEPENDENT RESEARCHER & DEVELOPER
      </motion.p>

      <h1>
        <motion.span variants={revealVariants}>THINK.</motion.span>
        <motion.span variants={revealVariants}>BUILD.</motion.span>
        <motion.span
          className="poster-outline"
          variants={revealVariants}
        >
          SECURE.
        </motion.span>
      </h1>

      <motion.p
        className="poster-tagline"
        variants={revealVariants}
      >
        ENGINEERING SYSTEMS
        <br />
        FOR A MORE SECURE
        <br />
        DIGITAL WORLD.
      </motion.p>
    </motion.div>
  );
}
