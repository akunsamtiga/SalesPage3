"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Kim Ji-soo",
    role: "CEO Beauty Startup",
    image: "/images/pp1.png",
    quote:
      "Produk ini benar-benar luar biasa! Saya mengalami peningkatan omzet hingga 200% dalam 3 bulan pertama.",
  },
  {
    name: "Park Min-young",
    role: "Digital Marketer",
    image: "/images/pp3.png",
    quote:
      "Sangat puas dengan layanan ini! Strategi pemasaran yang diberikan sangat efektif dan mudah diterapkan.",
  },
  {
    name: "Lee Ji-eun",
    role: "Entrepreneur",
    image: "/images/pp5.png",
    quote:
      "Tidak pernah menyangka bisnis saya bisa berkembang secepat ini. Benar-benar investasi terbaik!",
  },
];

const Testimonials = () => {
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
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#8B5E3B] leading-tight"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Apa Kata Mereka?
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Ribuan pelanggan telah merasakan manfaat luar biasa dari layanan kami.
        </p>
      </div>

      {/* Swiper Slider */}
      <motion.div
        className="mt-14 max-w-3xl mx-auto"
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={false}
          effect="fade"
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white bg-opacity-75 backdrop-blur-md p-8 rounded-xl shadow-lg text-center flex flex-col items-center border border-[#E0C097] transition duration-300 transform hover:scale-105 hover:shadow-2xl"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#E0C097] mb-4 shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.p
                  className="text-lg text-gray-700 italic font-serif"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <motion.h3
                  className="mt-4 text-xl font-semibold text-[#8B5E3B]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {testimonial.name}
                </motion.h3>
                <motion.span
                  className="text-gray-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {testimonial.role}
                </motion.span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center mt-14">
        <motion.a
          href="#cta"
          className="bg-[#8B5E3B] text-white px-8 py-4 rounded-md font-semibold text-xl shadow-lg hover:bg-[#6E3F22] transition duration-300 transform hover:scale-105"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.9 } },
          }}
        >
          Bergabung Sekarang! 🚀
        </motion.a>
      </div>
    </section>
  );
};

export default Testimonials;
