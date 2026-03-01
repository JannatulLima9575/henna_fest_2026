"use client";

import { motion } from "framer-motion";
import IslamicPatternBg from "./IslamicPatternBg";
import GlowParticles from "./GlowParticles";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center text-center px-4 md:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Henna"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <IslamicPatternBg />
      <GlowParticles />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Title */}
        <h1
          className="
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl
          font-serif font-bold mb-4
          text-[#FFD700]
          drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]
          "
        >
          Noor-E-Eid Henna Fest
          <br />2<span className="inline-block mx-0.5 text-[#FFD700]">🌙</span>26
        </h1>

        {/* Subtitle */}
        <p
          className="
        text-sm
        sm:text-lg
        md:text-2xl
        text-white
        mb-6
        md:mb-8
        opacity-95
        "
        >
          Celebrate Eid with Beautiful Mehendi, Festive Decor & Magical Vibes 🌿
        </p>

        {/* Premium Glass Card */}
        <div
          className="
  bg-white/85
  backdrop-blur-2xl
  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
  rounded-2xl md:rounded-3xl
  px-6 md:px-10
  py-5 md:py-7
  mb-6 md:mb-8
  border border-white/30
  max-w-md
  mx-auto
  hover:scale-[1.02]
  transition duration-300
"
        >
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold text-sm md:text-lg">
              <span className="text-lg">📅</span>
              <span>17–19 March 2026</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-lg">
              <span className="text-lg">⏰</span>
              <span>11 AM – 11 PM</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-lg">
              <span className="text-lg">📍</span>
              <span>Red Beauty Salon, Barudkhana</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://facebook.com/events/s/noor-e-eid-henna-fest-2026/1550464442732111/"
          target="_blank"
          className="
          relative
          inline-block
          px-8
          md:px-12
          py-3
          md:py-4
          rounded-full
          text-sm
          md:text-lg
          font-semibold
          text-white
          overflow-hidden
          group
          bg-gradient-to-r
          from-[#3a5a40]
          to-[#344e41]
          shadow-xl
          "
        >
          <span className="relative z-10">Book Your Slot Now ✨</span>

          <span
            className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          translate-x-[-100%]
          group-hover:translate-x-[100%]
          transition
          duration-1000
          ease-in-out
          "
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
