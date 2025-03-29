"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Apa manfaat utama dari produk ini?",
    answer:
      "Produk ini dirancang untuk meningkatkan produktivitas dan efisiensi Anda dengan fitur-fitur canggih yang mudah digunakan.",
  },
  {
    question: "Apakah saya mendapatkan dukungan pelanggan?",
    answer:
      "Ya, kami menyediakan dukungan pelanggan 24/7 untuk membantu Anda dengan semua pertanyaan dan kebutuhan teknis Anda.",
  },
  {
    question: "Bagaimana cara melakukan pembelian?",
    answer:
      "Anda dapat membeli produk ini langsung dari website kami dengan beberapa metode pembayaran yang tersedia.",
  },
  {
    question: "Apakah ada jaminan uang kembali?",
    answer:
      "Ya, kami menawarkan jaminan uang kembali dalam 30 hari jika Anda tidak puas dengan produk kami.",
  },
  {
    question: "Bisakah saya mengakses materi setelah pembelian?",
    answer:
      "Tentu! Setelah pembelian, Anda akan mendapatkan akses penuh ke materi dan pembaruan selamanya.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#F8F5F2] text-gray-900">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-[#8B5E3B]">Pertanyaan Umum</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Jawaban untuk pertanyaan yang sering diajukan.
        </p>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        className="mt-10 max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-[#E0C097] rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-lg font-semibold bg-[#F5E8DD] hover:bg-[#EAD6C1] transition duration-300"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#8B5E3B]" />
              </motion.div>
            </button>
            <motion.div
              initial="collapsed"
              animate={openIndex === index ? "open" : "collapsed"}
              variants={{
                open: { height: "auto", opacity: 1 },
                collapsed: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="p-5 text-gray-700">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
