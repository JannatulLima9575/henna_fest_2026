"use client";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">
        What You’ll Get ✨
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

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
            className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-3xl shadow-xl"
          >
            <p className="text-lg font-semibold text-stone-800">{item}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Features;