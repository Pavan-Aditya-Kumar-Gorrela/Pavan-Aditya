import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MLShowcase from './components/MLShowcase';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const backgroundOpacity = Math.min(scrollY / 1000, 0.5);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Background Overlay */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 transition-opacity duration-1000 pointer-events-none z-0"
        style={{ opacity: backgroundOpacity }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-lg font-semibold"
              >
                Loading Portfolio
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            >
              GPAK
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Research', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hoverable text-gray-300 hover:text-white transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              onClick={() => window.open('https://www.linkedin.com/in/pavan-aditya-kumar-gorrela-857770271/', '_blank')}
              className="hoverable px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <section id="about">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="research">
          <MLShowcase />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 border-t border-gray-800 py-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4"
            >
              Pavan Aditya Kumar Gorrela
            </motion.div>
            <p className="text-gray-400 max-w-md mx-auto">
              Full-Stack Developer & ML Enthusiast crafting the future of web development and artificial intelligence.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Pavan Aditya Kumar Gorrela. Built with React, TypeScript, Framer Motion & Three.js
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;