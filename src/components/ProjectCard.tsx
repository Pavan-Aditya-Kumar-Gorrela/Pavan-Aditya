import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-96 perspective-1000"
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleFlip}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="hoverable h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.category === 'web' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  project.category === 'ml' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  project.category === 'ai' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {project.category.toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs bg-gray-600 text-gray-400 rounded-md">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
              
              <div className="text-center text-xs text-gray-500">
                Click to flip for more details
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm flex-1">{project.description}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.mlModel && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-1">ML Model:</h4>
                <p className="text-sm text-gray-400">{project.mlModel}</p>
              </div>
            )}
            
            <div className="flex gap-3 mt-auto">
              {project.demoUrl && (
                <button className="hoverable flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors" onClick={()=> {window.open(project.demoUrl, "_blank")}}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              )}
              {project.githubUrl && (
                <button className="hoverable flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors" onClick={()=>{window.open(project.githubUrl , "_blank")} }>
                  <Github className="w-4 h-4" />
                  Code
                </button>
              )}
              {project.paperUrl && (
                <button className="hoverable flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors" onClick={()=>{window.open(project.paperUrl , "_blank")}}>
                  <FileText className="w-4 h-4" />
                  Paper
                </button>
              )}
            </div>
            
            <div className="text-center text-xs text-gray-500 mt-3">
              Click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;