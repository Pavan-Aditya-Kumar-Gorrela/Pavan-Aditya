import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const getGlowColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'shadow-blue-500/20 border-blue-500/30';
      case 'backend': return 'shadow-green-500/20 border-green-500/30';
      case 'ml': return 'shadow-purple-500/20 border-purple-500/30';
      case 'tools': return 'shadow-orange-500/20 border-orange-500/30';
      default: return 'shadow-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`hoverable relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border ${getGlowColor(skill.category)} hover:shadow-2xl transition-all duration-300`}
    >
      <div className="text-center">
        <div className="text-4xl mb-3">{skill.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
        
        <div className="relative w-full bg-gray-700 rounded-full h-2 mb-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            className={`h-2 rounded-full ${
              skill.category === 'frontend' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
              skill.category === 'backend' ? 'bg-gradient-to-r from-green-400 to-green-600' :
              skill.category === 'ml' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
              'bg-gradient-to-r from-orange-400 to-orange-600'
            }`}
          />
        </div>
        
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-xl opacity-0 ${
          skill.category === 'frontend' ? 'bg-blue-500/10' :
          skill.category === 'backend' ? 'bg-green-500/10' :
          skill.category === 'ml' ? 'bg-purple-500/10' :
          'bg-orange-500/10'
        }`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillCard;