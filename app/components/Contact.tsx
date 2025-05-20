'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to a server here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const socialLinks = [
    { 
      name: 'Email', 
      icon: <FaEnvelope className="text-2xl" />, 
      link: 'mailto:sammy.abs101@gmail.com',
      color: 'bg-red-500/20 text-red-400'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin className="text-2xl" />, 
      link: 'https://www.linkedin.com/in/sam-abbot21/',
      color: 'bg-blue-500/20 text-blue-400'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub className="text-2xl" />, 
      link: 'https://github.com/devsam31',
      color: 'bg-purple-500/20 text-purple-400'
    },
    { 
      name: 'Location', 
      icon: <FaMapMarkerAlt className="text-2xl" />, 
      link: '#',
      color: 'bg-green-500/20 text-green-400',
      displayInContact: true,
      hideInConnect: true
    }
  ];

  const connectLinks = socialLinks.filter(link => !link.hideInConnect);

  return (
    <section id="contact" className="py-20 relative">
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
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out using the form below or via my social media.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Message Sent!</h4>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-3 rounded-lg font-medium relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-white/30 group-hover:w-full transition-all duration-300"></span>
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                {socialLinks.filter(link => link.displayInContact !== false).map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mr-4`}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{link.name}</div>
                      {link.name === 'Location' ? (
                        <div className="text-white">Monmouth, NJ 07726, United States</div>
                      ) : (
                        <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                          {link.name === 'Email' ? 'sammy.abs101@gmail.com' : 
                           link.name === 'LinkedIn' ? 'linkedin.com/in/sam-abbot21' : 
                           link.name === 'GitHub' ? 'github.com/devsam31' : link.link}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {connectLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} p-4 rounded-xl flex items-center transition-transform hover:scale-105`}
                  >
                    <div className="mr-3">
                      {social.icon}
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 