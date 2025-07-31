import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Background3D from './Background3D';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Background3D />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src={profileImg} 
            alt="Profile" 
            className="mx-auto mb-6 w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            Pavan Aditya Kumar Gorrela
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer & ML Enthusiast
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting intelligent web applications with the power of MERN stack and machine learning. 
            Transforming data into insights and ideas into reality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="hoverable px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" onClick={()=>{
             window.open("https://github.com/Pavan-Aditya-Kumar-Gorrela/" , "_blank")
            }}>
              View My Work
            </button>
            <button className="hoverable px-8 py-3 border-2 border-gray-400 rounded-lg font-semibold hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300" 
            onClick={()=>{window.open("https://drive.google.com/file/d/1nmmIaFgY5k_aVDX2kajEARz-e8cLjpz2/view?usp=sharing")}}>
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;