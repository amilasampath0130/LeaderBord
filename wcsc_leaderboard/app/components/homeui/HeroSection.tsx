"use client";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-25  pb-20 relative">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="relative w-full lg:w-1/2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <div className="relative z-10 aspect-square rounded-full overflow-hidden border-2 border-blue-400/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
              <img
                src="https://media.istockphoto.com/id/501125078/vector/abstract-triangles-planet-earth-with-ring-of-binary-digits.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Jv6M98uMekysVPw4e1hfkKXmQKQSAQprR2vmK_qiYHw="
                alt="WCSC DEV"
                className="w-full h-full object-cover transform scale-110"
              />
            </div>
            <div className="absolute left-0 -bottom-10 w-24 h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 bg-blue-500/20 rounded-full filter blur-2xl z-0" />
            <div className="absolute top-0 -right-10 w-32 h-32 lg:w-64 lg:h-64 bg-cyan-500/20 rounded-full filter blur-3xl z-0" />
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                WCSC DEV
              </span>{" "}
              <br />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Track your progress, compete with fellow developers, and showcase
              your skills in our coding challenges and hackathons.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1">
                Get Started
              </button>
              {/* <button className="border border-blue-400/30 text-white px-8 py-3 rounded-full hover:bg-white/5 transition-all">
                Learn More
              </button> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
