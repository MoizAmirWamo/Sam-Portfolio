'use client';

import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaRobot, FaDatabase, FaCloud, FaDove } from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJupyter, 
  SiScikitlearn, 
  SiKeras, 
  SiHuggingface, 
  SiOpencv, 
  SiPandas, 
  SiNumpy, 
  SiKaggle,
  SiOpenai
} from 'react-icons/si';
import { GiHummingbird } from 'react-icons/gi';
import { BiNetworkChart } from 'react-icons/bi';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-3xl" />, level: 95 },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-3xl" />, level: 90 },
        { name: 'PyTorch', icon: <SiPytorch className="text-3xl" />, level: 90 },
        { name: 'Pandas/NumPy', icon: <SiPandas className="text-3xl" />, level: 95 },
      ]
    },
    {
      title: 'Deep Learning',
      skills: [
        { name: 'Neural Networks', icon: <BiNetworkChart className="text-3xl" />, level: 90 },
        { name: 'Computer Vision', icon: <SiOpencv className="text-3xl" />, level: 85 },
        { name: 'NLP', icon: <FaBrain className="text-3xl" />, level: 90 },
        { name: 'Keras', icon: <SiKeras className="text-3xl" />, level: 85 },
      ]
    },
    {
      title: 'Generative AI',
      skills: [
        { name: 'LLMs', icon: <SiOpenai className="text-3xl" />, level: 90 },
        { name: 'Hugging Face', icon: <SiHuggingface className="text-3xl" />, level: 85 },
        { name: 'LangChain', icon: <GiHummingbird className="text-3xl" />, level: 90 },
        { name: 'Prompt Engineering', icon: <SiOpenai className="text-3xl" />, level: 95 },
      ]
    },
    {
      title: 'MLOps & Tools',
      skills: [
        { name: 'Python', icon: <FaPython className="text-3xl" />, level: 95 },
        { name: 'Jupyter', icon: <SiJupyter className="text-3xl" />, level: 95 },
        { name: 'Data Management', icon: <FaDatabase className="text-3xl" />, level: 90 },
        { name: 'Cloud ML Services', icon: <FaCloud className="text-3xl" />, level: 85 },
      ]
    }
  ];

  // Tech stack icons grid
  const techIcons = [
    { name: 'PyTorch', icon: <SiPytorch className="text-4xl" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-4xl" /> },
    { name: 'OpenAI', icon: <SiOpenai className="text-4xl" /> },
    { name: 'Hugging Face', icon: <SiHuggingface className="text-4xl" /> },
    { name: 'Neural Networks', icon: <BiNetworkChart className="text-4xl" /> },
    { name: 'Python', icon: <FaPython className="text-4xl" /> },
    { name: 'LangChain', icon: <GiHummingbird className="text-4xl" /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-4xl" /> },
    { name: 'Jupyter', icon: <SiJupyter className="text-4xl" /> },
    { name: 'Computer Vision', icon: <SiOpencv className="text-4xl" /> },
    { name: 'Pandas', icon: <SiPandas className="text-4xl" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] z-[-1]"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">My Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Tech icons grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, color: "#8B5CF6" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-gray-300 hover:text-primary transition-colors"
            >
              {tech.icon}
              <span className="mt-2 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (catIndex * 0.1) }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-primary">{skill.icon}</div>
                      <span className="text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                        className="bg-gradient-primary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 