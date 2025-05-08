"use client";
import { motion } from "framer-motion";

export const Navigation = () => (
  <nav className="container mx-auto px-6 py-4 fixed w-full top-0 z-50 backdrop-blur-md border-b border-blue-400/20">
    <div className="flex items-center justify-between">
      <a href="#home" className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-400 rounded-full pulse-animation" />
        <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text ">
          WCSC DEV
        </span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        {["about", "blog", "team", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-gray-300 hover:text-white relative group capitalize px-3 py-2"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        {/* Added Register Button in Navbar */}
        <motion.button onClick={() => alert("Register Now")}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 ml-4 transition-all"
        >
          Register Now
        </motion.button>
      </div>
    </div>
  </nav>
);
