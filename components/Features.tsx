"use client";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f8f5ef]">

      {/* Title */}
      <h2 className="
      text-3xl
      md:text-5xl
      font-serif
      font-bold
      text-center
      text-[#3a5a40]
      mb-10
      md:mb-14
      ">
        What You’ll Get ✨
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

        {[
          "Premium Indian & Pakistani Designs 🤎",
          "Organic & Instant Henna Options 🌿",
          "Beautiful Eid Photo Decoration 📸",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
            bg-white
            p-6 md:p-8
            rounded-2xl md:rounded-3xl
            shadow-xl
            border border-[#e6c77a]/40
            hover:-translate-y-2
            transition duration-300
            "
          >

            <p className="
            text-base
            md:text-lg
            font-semibold
            text-[#344e41]
            ">
              {item}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Features;