"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCouch } from "react-icons/fa"; // Ikon furnitur

export default function CountdownTimer() {
  const targetDate = new Date("2025-04-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center bg-[#FAF3E0] p-10 my-5 md:my-10 rounded-xl w-full max-w-lg mx-auto text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h2
        className="text-[#6B4226] text-2xl font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Koleksi Baru Segera Hadir ✨
      </motion.h2>
      <p className="text-[#8B4513] text-sm mt-2">
        Hadirkan sentuhan elegan ke dalam rumah Anda.
      </p>

      {/* Timer */}
      <div className="flex space-x-4 mt-6">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              key={value}
              className="bg-[#D2B48C] text-white font-bold text-3xl w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {value}
            </motion.div>
            <p className="text-xs mt-2 text-[#6B4226] uppercase">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Ikon */}
      <motion.div className="mt-6" whileHover={{ scale: 1.1 }}>
        <FaCouch className="text-[#6B4226] text-4xl" />
      </motion.div>
    </motion.div>
  );
}
