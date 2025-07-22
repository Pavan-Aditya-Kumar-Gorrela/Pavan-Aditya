import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCard from './SkillCard';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { name: 'Frontend', key: 'frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Backend', key: 'backend', color: 'from-green-400 to-green-600' },
    { name: 'ML & AI', key: 'ml', color: 'from-purple-400 to-purple-600' },
    { name: 'Tools', key: 'tools', color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills Matrix
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive blend of full-stack development expertise and machine learning proficiency, 
            bridging the gap between traditional web development and artificial intelligence.
          </p>
        </motion.div>

        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category.key);
          
          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <motion.h3 
                  className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mr-4`}
                  whileHover={{ scale: 1.05 }}
                >
                  {category.name}
                </motion.h3>
                <motion.div 
                  className={`flex-1 h-0.5 bg-gradient-to-r ${category.color} opacity-30`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Technical Keywords Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Neural Networks', 'Computer Vision', 'NLP', 'Deep Learning', 'REST APIs',
              'GraphQL', 'Microservices', 'Docker', 'AWS', 'TensorFlow', 'PyPI',
              'Transformers', 'CNN', 'RNN', 'LSTM', 'React Hooks', 'TypeScript',
              'Node.js', 'Express', 'MongoDB', 'PostgreSQL'
            ].map((keyword, index) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, color: '#3B82F6' }}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-default"
              >
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;