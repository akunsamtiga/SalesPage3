"use client"
import { motion } from "framer-motion";
import { PlayCircle, Smile, Award, Users, Zap } from "lucide-react";
import { useState } from "react";

const VideoSalesLetter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = "G3oB4owTOGY"; // ID video Anda

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
      y: -5,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const videoFeatures = [
    {
      icon: <Smile className="w-8 h-8 text-yellow-500" />,
      title: "Menyenangkan",
      description: "Metode belajar seru seperti bermain game"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Berkualitas",
      description: "Kurikulum dirancang oleh ahli pendidikan"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Komunal",
      description: "Belajar bersama komunitas kreatif"
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
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
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Video Player */}
          <motion.div 
            variants={item}
            className="lg:w-1/2 w-full relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              ) : (
                <>
                  {/* Video Thumbnail Placeholder */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center cursor-pointer relative"
                    onClick={handlePlay}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <PlayCircle className="w-20 h-20 text-white/90 hover:text-white transition-all" />
                    </motion.div>
                    
                    {/* Play button animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </motion.div>
                    
                    {/* Video info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-10">
                      <div className="flex items-center">
                        <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                        <span className="text-white font-medium">Tonton video penjelasan kami</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={item}
            className="lg:w-1/2 w-full"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Lihat Sendiri
              </span>{" "}
              Keajaiban Belajar Kreatif!
            </motion.h2>
            
            <motion.p className="text-lg text-gray-600 mb-8">
              Dalam video ini, Anda akan melihat bagaimana metode kami mengubah belajar menjadi petualangan yang menyenangkan untuk anak-anak dan komunitas kreatif.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {videoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="flex items-start p-4 bg-white/80 hover:bg-white rounded-xl shadow-md transition-all"
                >
                  <div className={`p-3 rounded-full ${feature.icon.props.className.includes('yellow') ? 'bg-yellow-100' : feature.icon.props.className.includes('purple') ? 'bg-purple-100' : 'bg-blue-100'} mr-4`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {!isPlaying && (
              <motion.button
                onClick={handlePlay}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Putar Video Sekarang
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;