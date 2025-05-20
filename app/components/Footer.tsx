'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-t from-[#0f172a] to-[#0f172a]/90 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-bold text-xl">Sam Abbott</span>
            <p className="text-gray-400 text-sm mt-1">AI Engineer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/devsam31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/sam-abbot21/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:sammy.abs101@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-primary transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sam Abbott. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 