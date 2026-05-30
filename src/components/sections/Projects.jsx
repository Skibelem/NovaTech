import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newProjectsData } from '../../data/projects';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import Button from '../ui/Button';
import ProjectPreviewPlaceholder from '../ui/ProjectPreviewPlaceholder';
import ProjectModal from '../ui/ProjectModal';
import Reveal from '../ui/Reveal';

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
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
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

        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-3xl">
            <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Projects &amp; Solutions We've Worked On</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              A look at selected digital products, business systems, and web solutions that reflect NovaTech's technical direction and problem-solving ability.
            </h3>
          </div>
          <button onClick={() => scrollToSection('contact')} className="hidden md:flex items-center text-nova-yellow hover:text-white transition-colors duration-300 group font-medium mt-6 md:mt-0 shrink-0">
            Let's Build
            <MessageSquare className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="bg-white/[0.01] backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2.5 hover:border-nova-blue/40 border border-white/10 shadow-xl hover:shadow-[0_20px_50px_rgba(3,23,252,0.18),_0_0_30px_rgba(252,252,3,0.06)] group"
            >
              {/* Screenshot Area */}
              <div className="relative h-48 w-full border-b border-white/5 overflow-hidden">
                <ProjectImage src={project.image} title={project.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-nova-darker/80 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg transition-all duration-300 group-hover:border-nova-yellow/30 group-hover:text-nova-yellow">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-extrabold text-white mb-2 leading-tight group-hover:text-nova-yellow transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-nova-gray/80 text-[13px] leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] text-white/70 text-[10px] font-semibold rounded-md tracking-wide transition-all duration-300 group-hover:border-nova-blue/30 group-hover:bg-nova-blue/[0.04] group-hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables/Features */}
                <div className="mb-6 pt-4 border-t border-white/5">
                  <h5 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Core Deliverables</h5>
                  <ul className="space-y-2.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-nova-gray text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-nova-yellow mr-2.5 shadow-[0_0_6px_rgba(252,252,3,0.8)] shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA / Button */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group py-3 rounded-xl border-white/15 text-white hover:bg-nova-blue hover:border-nova-blue hover:text-white hover:shadow-[0_0_15px_rgba(3,23,252,0.4)] transition-all duration-300"
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


