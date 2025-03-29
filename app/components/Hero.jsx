"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F5DC] to-white pb-20">
      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-full hidden md:block">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,144C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Hero Image - Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="block md:hidden relative mb-4"
        >
          <img
            src="/images/sofa.jpg"
            alt="Furnitur Mewah"
            className="w-full h-[150px] object-cover rounded-b-4xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-4 px-6 rounded-b-4xl">
            <h1 className="text-xl font-bold">Kesederhanaan Dalam Furnitur</h1>
            <p className="text-sm">Membantu Anda Mendekorasi dengan Mudah</p>
          </div>
        </motion.div>

        {/* Text & CTA - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mt-6"
        >
          <p className="text-gray-600 text-lg">
            Kami menghadirkan solusi furnitur elegan dan berkualitas tinggi
            untuk rumah dan bisnis Anda.
          </p>
          <button className="mt-4 bg-[#d4a373] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#c6906a] transition">
            Temukan Furnitur Impian Anda
          </button>
        </motion.div>

        {/* Grid Layout (Desktop & Tablet) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Kesederhanaan <br /> Dalam Furnitur Mewah
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Kami membantu Anda memilih furnitur terbaik untuk rumah,
              apartemen, dan bisnis Anda dengan mudah dan elegan.
            </p>
            <button className="mt-6 bg-[#d4a373] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#c6906a] transition">
              Jelajahi Koleksi Kami
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="/images/sofa.jpg"
                alt="Furnitur Mewah"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-5 right-5 bg-gray-900/75 text-white text-sm p-4 rounded-lg">
                <p>150+ Koleksi Furnitur Premium</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* "Tentang Kami" Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Kartu Informasi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#c4a27a] to-[#8d6f50] text-white p-8 rounded-lg shadow-xl text-center md:text-left"
          >
            <p className="text-lg font-semibold">PENGALAMAN FURNITUR PREMIUM</p>
            <h2 className="text-4xl font-bold mt-2">150+</h2>
            <p className="mt-2 text-sm">Koleksi Furnitur Premium</p>
            <h2 className="text-2xl font-bold mt-4">15+</h2>
            <p className="mt-2 text-sm">Tahun Pengalaman Industri</p>
          </motion.div>

          {/* Konten "Tentang Kami" */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg border-2 shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img
                src="/images/sofa.jpg"
                alt="Tentang Kami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Tentang Kami</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Kami memahami pentingnya desain elegan dan kualitas tinggi dalam
                setiap pilihan furnitur yang Anda buat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
