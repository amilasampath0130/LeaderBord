"use client";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-40 backdrop-blur-lg"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform group-hover:rotate-2 transition duration-500" />
            <img
              src="https://itcformacionyconsultoria.com/wp-content/uploads/2024/05/machine-learning.webp"
              alt="AI Programming"
              className="rounded-3xl relative"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">About WCSC DEV</h2>
            <p className="text-gray-300 leading-relaxed">
              WCSC DEV is the official software engineering team of Wayamba University of Sri Lanka, 
              dedicated to fostering innovation, collaboration, and excellence in technology. 
              Our mission is to create a vibrant community of passionate coders and problem solvers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/40 p-6 rounded-xl border border-blue-400/20">
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-400">
                  To empower students through coding competitions, workshops, and real-world projects.
                </p>
              </div>
              <div className="bg-gray-800/40 p-6 rounded-xl border border-blue-400/20">
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-400">
                  To become a hub of technical innovation and produce industry-ready software engineers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
