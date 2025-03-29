"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-12 bg-[#F8F5F2] text-gray-900 relative overflow-hidden"
    >
      {/* Background Gradient & Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E8DD] to-white opacity-70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-white mix-blend-overlay opacity-30"></div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-[#8B5E3B] leading-tight">
          Mulai Perjalanan Anda Hari Ini!
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Jangan lewatkan kesempatan untuk meningkatkan keterampilan dan
          mencapai kesuksesan.
        </p>

        <motion.a
          href="#checkout"
          className="mt-8 inline-block px-12 py-5 text-white font-semibold rounded-lg bg-gradient-to-r from-[#E0A96D] to-[#8B5E3B] shadow-lg hover:shadow-[#8B5E3B] transition duration-300 text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Bergabung Sekarang 🚀
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTA;
