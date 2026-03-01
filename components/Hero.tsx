"use client";

import { motion } from "framer-motion";
import IslamicPatternBg from "./IslamicPatternBg";
import GlowParticles from "./GlowParticles";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100">
      
      <IslamicPatternBg />
      <GlowParticles />

      {/* Glow Background Circles */}
      <div className="absolute w-[500px] h-[500px] bg-rose-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-amber-300 rounded-full blur-3xl opacity-30 bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* 🔥 Gold Gradient Animated Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
          Noor-E-Eid Henna Fest 2026
        </h1>

        <p className="text-lg md:text-2xl text-stone-700 mb-8">
          Celebrate Eid with Beautiful Mehendi, Festive Decor & Magical Vibes 🤎🌿
        </p>

        {/* Glass Card */}
        <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl px-8 py-6 mb-8 border border-white/40">
          <p className="text-lg font-semibold">📅 17–19 March 2026</p>
          <p className="text-lg">⏰ 11 AM – 11 PM</p>
          <p className="text-lg">📍 Red Beauty Salon, Barudkhana</p>
        </div>

        {/* 🔥 Shimmer CTA Button */}
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href="https://facebook.com/events/s/noor-e-eid-henna-fest-2026/1550464442732111/"
          target="_blank"
          className="relative inline-block px-12 py-4 rounded-full text-lg font-semibold text-white overflow-hidden group bg-gradient-to-r from-rose-600 to-rose-700 shadow-xl"
        >
          <span className="relative z-10">Book Your Slot Now ✨</span>

          {/* Shimmer Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-in-out" />
        </motion.a>

      </motion.div>
    </section>
  );
};

export default Hero;