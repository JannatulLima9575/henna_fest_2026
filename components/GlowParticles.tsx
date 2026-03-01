"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 15 });

const GlowParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute w-3 h-3 bg-amber-300 rounded-full blur-sm opacity-60"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, -50],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default GlowParticles;