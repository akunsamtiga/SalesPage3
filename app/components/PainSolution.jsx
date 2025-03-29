"use client"; 

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const PainSolution = () => {
  // Intersection Observer
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Apakah Anda Mengalami Masalah Ini?
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Banyak orang menghadapi tantangan ini sebelum menemukan solusi yang tepat. Jangan khawatir, kami punya jawabannya!
        </p>
      </div>

      {/* Grid untuk Menampilkan Masalah & Solusi */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-14"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
      >
        {/* Masalah */}
        <motion.div
          className="bg-red-50 border-l-8 border-red-500 p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="flex items-center text-2xl font-semibold text-red-600 mb-5">
            <ExclamationCircleIcon className="h-7 w-7 text-red-500 mr-2" />
            Tantangan yang Anda Hadapi
          </h3>
          <ul className="mt-5 space-y-4 text-gray-700 text-lg">
            <li className="flex items-center">
              <ExclamationCircleIcon className="h-6 w-6 text-red-400 mr-2" />
              Sulit mendapatkan hasil maksimal?
            </li>
            <li className="flex items-center">
              <ExclamationCircleIcon className="h-6 w-6 text-red-400 mr-2" />
              Bingung harus mulai dari mana?
            </li>
            <li className="flex items-center">
              <ExclamationCircleIcon className="h-6 w-6 text-red-400 mr-2" />
              Sudah mencoba berbagai cara tapi gagal?
            </li>
            <li className="flex items-center">
              <ExclamationCircleIcon className="h-6 w-6 text-red-400 mr-2" />
              Waktu & tenaga terbuang percuma?
            </li>
          </ul>
        </motion.div>

        {/* Solusi */}
        <motion.div
          className="bg-green-50 border-l-8 border-green-500 p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="flex items-center text-2xl font-semibold text-green-600 mb-5">
            <CheckCircleIcon className="h-7 w-7 text-green-500 mr-2" />
            Solusi Terbaik untuk Anda
          </h3>
          <ul className="mt-5 space-y-4 text-gray-700 text-lg">
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              🚀 Strategi yang terbukti berhasil
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              🔑 Langkah-langkah jelas & mudah diikuti
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              🛠️ Tools dan resources eksklusif
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
              🎯 Dapatkan hasil lebih cepat & efektif
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center mt-14">
        <motion.a
          href="#cta"
          className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-xl shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
          }}
        >
          Dapatkan Solusi Sekarang 🚀
        </motion.a>
      </div>
    </section>
  );
};

export default PainSolution;
