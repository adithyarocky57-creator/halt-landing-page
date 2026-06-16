"use client";

import { motion } from "framer-motion";

export function BackgroundPaths() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-black">
      {/* Top animated line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          opacity: [0.1, 0.6, 0.1],
          top: [0, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle animated line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
        animate={{
          opacity: [0.05, 0.4, 0.05],
          top: ["50%", "55%", "50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Bottom animated line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        animate={{
          opacity: [0.08, 0.5, 0.08],
          bottom: [0, 150, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Decorative blur spots */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "10%" }}
      />
    </div>
  );
}
