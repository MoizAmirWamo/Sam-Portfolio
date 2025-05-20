'use client';

import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaAws, FaJava, FaJs, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai, SiCplusplus, SiR, SiKeras, SiMlflow, SiStreamlit, SiFlask, SiFastapi, SiLangchain, SiHuggingface } from 'react-icons/si';

export default function Skills() {
  // Define skill categories with corresponding skills
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-2xl" />, level: 95 },
        { name: "R", icon: <SiR className="text-2xl" />, level: 85 },
        { name: "Java", icon: <FaJava className="text-2xl" />, level: 80 },
        { name: "SQL", icon: <FaDatabase className="text-2xl" />, level: 90 },
        { name: "C++", icon: <SiCplusplus className="text-2xl" />, level: 75 },
        { name: "JavaScript", icon: <FaJs className="text-2xl" />, level: 70 },
      ]
    },
    {
      name: "Frameworks & Tools",
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="text-2xl" />, level: 90 },
        { name: "TensorFlow", icon: <SiTensorflow className="text-2xl" />, level: 85 },
        { name: "LangChain", icon: <SiLangchain className="text-2xl" />, level: 90 },
        { name: "FastAPI", icon: <SiFastapi className="text-2xl" />, level: 88 },
        { name: "Flask", icon: <SiFlask className="text-2xl" />, level: 85 },
        { name: "Streamlit", icon: <SiStreamlit className="text-2xl" />, level: 92 },
      ]
    },
    {
      name: "Libraries & Services",
      skills: [
        { name: "Hugging Face", icon: <SiHuggingface className="text-2xl" />, level: 90 },
        { name: "OpenAI", icon: <SiOpenai className="text-2xl" />, level: 95 },
        { name: "NLTK & spaCy", icon: <FaDatabase className="text-2xl" />, level: 88 },
        { name: "LLaMA", icon: <SiOpenai className="text-2xl" />, level: 82 },
        { name: "MLflow", icon: <SiMlflow className="text-2xl" />, level: 80 },
        { name: "AWS Services", icon: <FaAws className="text-2xl" />, level: 85 },
      ]
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I have expertise in a wide range of technologies and tools, with a focus on artificial intelligence, 
            machine learning, and natural language processing.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (categoryIndex * 0.1) }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + (skillIndex * 0.05) }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-primary rounded-full h-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.05) }}
                      ></motion.div>
                    </div>
                    <div className="mt-2 text-right text-sm text-gray-400">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 