"use client"
import { motion } from "framer-motion";
import { Star, Gem, Rocket, Zap, CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Pemula",
      price: "Rp 299.000",
      duration: "/bulan",
      popular: false,
      features: [
        "4 sesi per bulan",
        "Akses materi dasar",
        "Komunitas online",
        "Sertifikat partisipasi"
      ],
      color: "bg-blue-100",
      icon: <Star className="w-8 h-8 text-blue-600" />
    },
    {
      name: "Kreator",
      price: "Rp 599.000",
      duration: "/bulan",
      popular: true,
      features: [
        "8 sesi per bulan",
        "Akses materi premium",
        "Proyek kreatif",
        "Feedback mentor",
        "Komunitas eksklusif"
      ],
      color: "bg-purple-100",
      icon: <Gem className="w-8 h-8 text-purple-600" />
    },
    {
      name: "Pro",
      price: "Rp 999.000",
      duration: "/bulan",
      popular: false,
      features: [
        "12 sesi per bulan",
        "Akses semua materi",
        "Proyek kolaborasi",
        "Mentoring 1-on-1",
        "Portfolio review",
        "Sertifikat lengkap"
      ],
      color: "bg-orange-100",
      icon: <Rocket className="w-8 h-8 text-orange-600" />
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
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
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
        className="hidden lg:block absolute left-20 top-1/4 w-32 h-32 rounded-full bg-purple-200/20"
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
        className="hidden lg:block absolute right-20 bottom-1/4 w-40 h-40 rounded-full bg-indigo-200/20"
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
            <Zap className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              Pilihan Paket
            </span>{" "}
            Belajar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan paket yang paling sesuai dengan kebutuhan kreatif Anda!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="relative"
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-md"
                >
                  PILIHAN TERBAIK!
                </motion.div>
              )}
              
              <motion.div 
                className={`p-8 rounded-3xl shadow-lg border-2 ${plan.popular ? 'border-purple-300 bg-white' : 'border-white bg-white/90'} relative overflow-hidden`}
              >
                {/* Plan header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full ${plan.color} mr-4`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    <div className="flex items-end">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-semibold ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Daftar Sekarang
                </motion.button>

                {/* Decorative elements */}
                {plan.popular && (
                  <>
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -right-10 -top-10 w-32 h-32 rounded-full border-8 border-dashed border-purple-200 opacity-30"
                    />
                    <motion.div 
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full border-8 border-dashed border-indigo-200 opacity-30"
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Butuh paket khusus untuk komunitas atau sekolah?</p>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Hubungi Tim Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;