"use client"
import { motion } from "framer-motion";
import { Smile, Lightbulb, Users, Rocket, BookOpen } from "lucide-react";

const PainSolution = () => {
  const painPoints = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Materi Tidak Menarik",
      description: "Pelajaran tradisional membosankan dan tidak interaktif",
      solution: "Metode belajar kami menyenangkan seperti bermain game!",
      color: "bg-purple-100"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Tidak Ada Komunitas",
      description: "Sulit menemukan teman dengan minat yang sama",
      solution: "Bergabunglah dengan komunitas kreatif kami yang ramah!",
      color: "bg-blue-100"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Tidak Ada Proyek Nyata",
      description: "Hanya teori tanpa praktik langsung",
      solution: "Belajar melalui proyek kreatif yang bisa dibanggakan!",
      color: "bg-orange-100"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute left-20 top-1/4 w-32 h-32 rounded-full bg-pink-200/20"
      />
      
      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="hidden lg:block absolute right-20 bottom-1/4 w-40 h-40 rounded-full bg-yellow-200/20"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-6">
            <Smile className="w-10 h-10 text-yellow-500" />
            <Lightbulb className="w-10 h-10 text-pink-500 -ml-3" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-500">
              Masalah
            </span>{" "}
            vs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
              Solusi
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami memahami tantangan Anda dan memiliki solusi kreatif untuk mengatasinya!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={{ ...item, ...hoverCard }}
              whileHover="hover"
              className="relative"
            >
              {/* Pain Point Card */}
              <motion.div 
                className={`p-6 rounded-2xl shadow-md mb-4 ${point.color} relative z-10`}
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0 }}
              >
                <div className="flex items-center mb-4">
                  {point.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{point.title}</h3>
                </div>
                <p className="text-gray-600 mb-0">{point.description}</p>
                
                {/* Tear element */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-inherit clip-path-tear"></div>
              </motion.div>

              {/* Solution Card */}
              <motion.div 
                className="p-6 bg-white rounded-2xl shadow-lg mt-4 border border-gray-100"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0 }}
              >
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{point.solution}</p>
                </div>
              </motion.div>

              {/* Connector line */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-purple-300 to-pink-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto text-pink-500">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-gray-500 mt-2">Scroll untuk lanjut</p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-path-tear {
          clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
        }
      `}</style>
    </section>
  );
};

export default PainSolution;