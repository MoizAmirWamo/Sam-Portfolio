'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] z-[-1]"></div>
      
      {/* Blue circles in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-300">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Sam Abbott</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">AI Engineer</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Experienced AI Engineer with 6+ years of expertise in deep learning, 
            neural networks, and Generative AI, specializing in NLP and LLMs.
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary px-6 py-3 rounded-full text-white font-medium"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-medium"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex items-center justify-center text-gray-400 hover:text-primary">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <FaArrowDown />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
} 