import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newProjectsData } from '../../data/projects';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import Button from '../ui/Button';
import ProjectPreviewPlaceholder from '../ui/ProjectPreviewPlaceholder';
import ProjectModal from '../ui/ProjectModal';

const ProjectImage = ({ src, title }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return <ProjectPreviewPlaceholder projectTitle={title} />;
  }

  return (
    <img
      src={src}
      alt={`${title} preview`}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover"
    />
  );
};

const Projects = ({ onProjectSelect }) => {
  const [activeProject, setActiveProject] = useState(null);

  const handleBuildSimilar = (projectName) => {
    setActiveProject(null);
    if (onProjectSelect) onProjectSelect(projectName);
    scrollToSection('contact');
  };

  return (
    <section id="work" className="py-24 relative bg-nova-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-3xl">
            <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Projects &amp; Solutions We've Worked On</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              A look at selected digital products, business systems, and web solutions that reflect NovaTech's technical direction and problem-solving ability.
            </h3>
          </div>
          <button onClick={() => scrollToSection('contact')} className="hidden md:flex items-center text-nova-yellow hover:text-white transition-colors duration-300 group font-medium mt-6 md:mt-0 shrink-0">
            Let's Build
            <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:border-nova-blue/30 hover:shadow-[0_0_32px_rgba(3,23,252,0.12)] transition-all duration-300 border border-white/10"
            >
              <div className="relative h-48 w-full border-b border-white/5 overflow-hidden">
                <ProjectImage src={project.image} title={project.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-nova-dark/80 backdrop-blur-md border border-nova-yellow/30 text-nova-yellow text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-nova-gray text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h5 className="text-white text-sm font-semibold mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-nova-yellow mr-2 shrink-0 mt-0.5" />
                        <span className="text-nova-gray text-sm line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-nova-yellow text-xs font-medium pl-6 pt-1">
                        + {project.features.length - 3} more key features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() => setActiveProject(project)}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-nova-yellow hover:text-white transition-colors duration-300 group font-medium">
            Discuss Your Idea
            <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>

      {/* Modal rendering inside AnimatePresence for exit animations */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            onBuildSimilar={handleBuildSimilar}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;


