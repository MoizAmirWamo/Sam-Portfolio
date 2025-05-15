'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'GovProposalPro',
      description: 'An AI-driven contract proposal automation platform that reduces proposal creation time by 70%.',
      category: 'ai',
      image: '/projects/govproposalpro.jpg',
      techStack: ['React.js', 'Django', 'OpenAI', 'PostgreSQL', 'GCP'],
      // Note: Videos need to be hosted externally (e.g., Cloudinary, AWS S3) for production
      // Local path used for development only
      demoVideo: '/videos/GovProposalPro_App_demo.mp4'
    },
    {
      id: 2,
      title: 'BurstModeAI',
      description: 'AI-powered professional image enhancement platform that reduces the cost of image editing by 60%.',
      category: 'ai',
      image: '/projects/burstmodeai.jpg',
      techStack: ['Next.js', 'Gemini', 'Firebase', 'GCP', 'Stripe'],
      demoVideo: '/videos/Burst-Mode-AI.MP4'
    },
    {
      id: 3,
      title: 'Chronos',
      description: 'AI-powered time series forecasting tool that simplifies forecasting for non-technical users.',
      category: 'data',
      image: '/projects/chronos.jpg',
      techStack: ['Streamlit', 'Python', 'Chronos-T5', 'Random Forest', 'ARIMA'],
      demoVideo: '/videos/Time-Series-App.mov'
    },
    {
      id: 4,
      title: 'RelaxerAI',
      description: 'A conversational mental health assistant providing empathetic support through natural conversation.',
      category: 'nlp',
      image: '/projects/relaxerai.jpg',
      techStack: ['Next.js', 'FastAPI', 'LangChain', 'OpenAI', 'ChromaDB'],
      demoVideo: '/videos/RelaxerAI.mov'
    },
    {
      id: 5,
      title: 'LangChain-Based RAG',
      description: 'RAG system integrating multiple LLMs for enhanced document-based question answering.',
      category: 'nlp',
      image: '/projects/langchain-rag.jpg',
      techStack: ['LangChain', 'Llama3', 'DeepSeek', 'FAISS', 'FastEmbed'],
      demoVideo: '/videos/Langchain_RAG.mov'
    },
    {
      id: 6,
      title: 'Movie Advisor',
      description: 'Movie recommendation system that provides personalized movie suggestions based on user preferences.',
      category: 'data',
      image: '/projects/movie-advisor.jpg',
      techStack: ['Streamlit', 'Python', 'TF-IDF', 'Cosine Similarity', 'TMDb API'],
      demoVideo: '/videos/Movie-Rcommender.mov'
    },
  ];

  // Close modal function
  const closeModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Open modal function
  const openModal = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    document.body.style.overflow = 'hidden';
  };

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'nlp', label: 'NLP' },
    { value: 'data', label: 'Data Science' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a] z-[-1]"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">My Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of AI/ML projects, showcasing expertise in machine learning,
            natural language processing, data science, and web development.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-primary text-white'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-primary/20 to-secondary/20">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => openModal(project.demoVideo)}
                  className="flex items-center justify-center w-full gap-2 bg-gradient-primary text-white px-4 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                >
                  <FaPlayCircle className="text-lg" /> Watch Demo Video
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="bg-gradient-primary inline-block px-8 py-3 rounded-full text-white font-medium"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-[#0f172a]/90 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-3 px-4 flex justify-between items-center">
              <h3 className="text-white font-medium">
                {activeVideo.includes('GovProposalPro') && 'GovProposalPro Demo'}
                {activeVideo.includes('Burst-Mode-AI') && 'BurstModeAI Demo'}
                {activeVideo.includes('Time-Series-App') && 'Chronos Time Series Demo'}
                {activeVideo.includes('RelaxerAI') && 'RelaxerAI Demo'}
                {activeVideo.includes('Langchain_RAG') && 'LangChain-Based RAG Demo'}
                {activeVideo.includes('Movie-Rcommender') && 'Movie Advisor Demo'}
              </h3>
              <button 
                onClick={closeModal}
                className="bg-white/20 rounded-full p-1.5 text-white hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black relative">
              <video 
                src={activeVideo} 
                controls 
                playsInline
                autoPlay
                controlsList="nodownload"
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Video loading error:', e);
                  alert('Sorry, there was an error loading the video. Please try again later.');
                  closeModal();
                }}
              >
                <source src={activeVideo} type={activeVideo.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 