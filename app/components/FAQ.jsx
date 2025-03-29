"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardEdit, 
  Cake, 
  Sparkles, 
  Clock,
  ChevronDown,
  HelpCircle,
  BookOpenText,
  Users,
  Palette,
  Code2,
  Leaf
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Bagaimana cara mendaftar kursus kreatif ini?",
      answer: "Kamu bisa mendaftar melalui tombol 'Daftar Sekarang' di atas, lalu ikuti panduan pendaftarannya. Prosesnya mudah dan menyenangkan!",
      icon: <ClipboardEdit className="w-6 h-6 text-purple-600" />
    },
    {
      question: "Apakah ada persyaratan usia untuk mengikuti kursus?",
      answer: "Kursus kami dirancang untuk anak usia 6-15 tahun, tapi siapa saja yang ingin belajar kreatif bisa bergabung!",
      icon: <Cake className="w-6 h-6 text-pink-500" />
    },
    {
      question: "Apa yang membuat kursus ini berbeda?",
      answer: "Kami menggunakan metode belajar sambil bermain dengan pendekatan kreatif yang unik dan proyek-proyek seru!",
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />
    },
    {
      question: "Berapa lama durasi setiap sesi belajar?",
      answer: "Setiap sesi berdurasi 60 menit dengan istirahat singkat di tengahnya agar tetap fokus dan menyenangkan!",
      icon: <Clock className="w-6 h-6 text-blue-500" />
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const answerVariants = {
    open: { 
      opacity: 1, 
      height: "auto",
      marginTop: "0.5rem",
      transition: { 
        duration: 0.3,
        ease: [0.16, 0.77, 0.47, 0.97] 
      } 
    },
    closed: { 
      opacity: 0, 
      height: 0,
      marginTop: "0",
      transition: { 
        duration: 0.2,
        ease: [0.16, 0.77, 0.47, 0.97]
      } 
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute left-20 top-1/4 w-24 h-24 rounded-full bg-purple-200/20"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden lg:block absolute right-20 bottom-1/4 w-32 h-32 rounded-full bg-blue-200/20"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={item} className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-purple-600" />
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Pertanyaan
            </span>{" "}
            yang Sering Ditanyakan
          </motion.h2>
          <motion.p variants={item} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan-pertanyaan umum seputar program kreatif kami.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="mb-4 overflow-hidden"
            >
              <motion.div
                initial={false}
                onClick={() => toggleFAQ(index)}
                className={`p-6 rounded-xl cursor-pointer flex items-start ${activeIndex === index ? 'bg-white shadow-lg border border-purple-100' : 'bg-white/90 hover:bg-white shadow-md border border-white'}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="mr-4 mt-1">{faq.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className="text-gray-500 ml-4"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={answerVariants}
                        className="pt-3 text-gray-600 text-left flex items-start"
                      >
                        <span className="block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Hubungi Tim Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;