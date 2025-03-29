"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCouch } from "react-icons/fa"; // Ikon sofa

const pricingPlans = [
  {
    name: "Basic",
    price: "Rp 199.000",
    features: ["Desain Dasar", "Konsultasi Online", "Support via Email"],
    buttonText: "Pilih Paket",
  },
  {
    name: "Pro",
    price: "Rp 499.000",
    features: [
      "Desain Eksklusif",
      "Konsultasi 3x/Bulan",
      "Support Prioritas",
      "Bonus Katalog Furnitur",
    ],
    buttonText: "Paket Terpopuler",
  },
  {
    name: "Premium",
    price: "Rp 999.000",
    features: [
      "Desain Premium",
      "Konsultasi 1-on-1",
      "Rekomendasi Material",
      "Akses Eksklusif ke Supplier",
    ],
    buttonText: "Gabung Sekarang",
  },
];

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-12 bg-[#FAF3E0] text-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/wood-pattern.png')] opacity-10 pointer-events-none"></div>

      {/* Judul Section dengan Motion */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold leading-tight text-[#8B5E3B]">
          Pilih Paket Desain Furnitur Anda
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Rancang ruang impian Anda dengan layanan desain furnitur eksklusif kami.
        </p>
      </motion.div>

      {/* Pricing Cards dengan Animasi */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative p-10 rounded-2xl bg-white shadow-lg border border-[#D2B48C] text-center flex flex-col items-center transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Label Best Seller */}
            {index === 1 && (
              <motion.span
                className="absolute -top-5 px-4 py-1 text-sm font-bold bg-[#8B5E3B] text-white rounded-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Best Seller ⭐
              </motion.span>
            )}
            <h3 className="text-2xl font-semibold text-[#8B5E3B]">{plan.name}</h3>

            {/* Harga */}
            <motion.p
              className="text-4xl font-bold mt-4 text-[#8B4513]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {plan.price}
            </motion.p>

            {/* Fitur List */}
            <ul className="mt-6 space-y-3 text-lg text-gray-700">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <FaCouch className="text-[#D2B48C] text-xl" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tombol CTA */}
            <motion.a
              href="#checkout"
              className="mt-8 px-8 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-[#A67B5B] to-[#8B5E3B] shadow-lg hover:shadow-[#6E3F22] transition duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {plan.buttonText}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
