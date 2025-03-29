"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VideoSalesLetter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#FAF3E0] text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#8B5E3B] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tonton Video Ini dan Temukan Rahasia Furnitur Eksklusif!
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg">
          Video ini akan mengungkapkan bagaimana Anda bisa memiliki furnitur mewah yang meningkatkan estetika dan kenyamanan hunian Anda.
        </p>
      </div>

      {/* Container Video hanya dirender di client */}
      <motion.div
        className="mt-10 max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-xl border-4 border-[#8B5E3B]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isClient && (
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/qK31qpUJC-A?rel=0&showinfo=0&autoplay=1&mute=1"
            title="Video Sales Letter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center mt-14">
        <motion.a
          href="#cta"
          className="bg-[#8B5E3B] text-white px-8 py-4 rounded-md font-semibold text-xl shadow-lg hover:bg-[#6E3F22] transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Dapatkan Koleksi Eksklusif Sekarang! 🏡✨
        </motion.a>
      </div>
    </section>
  );
};

export default VideoSalesLetter;
