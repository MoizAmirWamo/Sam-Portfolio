'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaCloud } from 'react-icons/fa';

export default function About() {
  const stats = [
    { id: 1, label: 'Years Experience', value: '6+' },
    { id: 2, label: 'Projects Completed', value: '40+' },
    { id: 3, label: 'ML Models Deployed', value: '25+' },
    { id: 4, label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a] z-[-1]"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Hello, I'm <span className="text-white">Sam Abbott</span></h3>
              <p className="text-gray-300 mb-4">
                I'm an AI Engineer with over 6 years of experience in cutting-edge technologies such as deep learning, 
                neural networks, and Generative AI, specializing in NLP and LLMs.
              </p>
              <p className="text-gray-300 mb-4">
                I'm proficient in Python, R, Java, SQL, C++, Javascript and frameworks like PyTorch, TensorFlow, LangChain, 
                LangGraph, FastAPI, CrewAI, and LlamaIndex.
              </p>
              <p className="text-gray-300">
                Currently, I'm working as a Sr. AI Engineer at Code Genix, where I lead projects in the pharmaceutical 
                industry, developing NLP-driven solutions and implementing LLMs for contextualized chatbots, 
                semantic search engines, and document summarization.
              </p>
            </div>
          </motion.div>
          
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              <a 
                href="#contact" 
                className="bg-gradient-primary text-white py-3 px-6 rounded-xl text-center font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-6 rounded-xl text-center font-medium"
              >
                View Work
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Development</h3>
            <p className="text-gray-400">Building advanced AI solutions and LLMs for real-world business applications.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDatabase className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data Science</h3>
            <p className="text-gray-400">Extracting meaningful insights from complex data to drive business decisions.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRobot className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">NLP & GenAI</h3>
            <p className="text-gray-400">Creating intelligent language models and generative AI solutions for various applications.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCloud className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">MLOps</h3>
            <p className="text-gray-400">Implementing production-grade ML infrastructure and deployment pipelines.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 