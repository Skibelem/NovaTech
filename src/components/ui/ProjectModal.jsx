import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import ProjectPreviewPlaceholder from './ProjectPreviewPlaceholder';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    y: 10,
    transition: { duration: 0.2, ease: 'easeIn' } 
  }
};

const ProjectModal = ({ project, onClose, onBuildSimilar }) => {
  const modalRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  // Setup keyboard accessibility, focus trapping and body scroll locking
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark semi-transparent overlay with backdrop blur */}
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 bg-[#02030a]/80 backdrop-blur-md cursor-pointer"
        aria-hidden="true"
      />

      {/* Premium Glassmorphic Modal Card */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-5xl bg-[#050816]/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] outline-none"
      >
        {/* Soft Glowing Accent Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-nova-blue/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-nova-yellow/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Touch-Friendly Glass Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-nova-darker/60 backdrop-blur-md border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg focus-ring-nova"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT PANEL: Screenshot Area */}
        <div className="w-full md:w-5/12 lg:w-1/2 md:h-auto h-64 relative bg-nova-darker border-b md:border-b-0 md:border-r border-white/5 flex-shrink-0 flex items-center justify-center overflow-hidden">
          {hasError || !project.image ? (
            <div className="w-full h-full">
              <ProjectPreviewPlaceholder projectTitle={project.title} />
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
            />
          )}
        </div>

        {/* RIGHT PANEL: Project Information Details */}
        <div className="w-full md:w-7/12 lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category Eyebrow */}
            <span className="inline-block bg-nova-blue/20 border border-nova-blue/30 text-nova-yellow text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md mb-4">
              {project.category}
            </span>

            {/* Title */}
            <h3 
              id="modal-project-title" 
              className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight"
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-nova-gray text-sm sm:text-base leading-relaxed mb-6">
              {project.fullDescription || project.description}
            </p>

            {/* Premium Features List */}
            <div className="mb-6">
              <h4 className="text-white text-xs font-semibold mb-3 tracking-wider uppercase opacity-90">
                Key Features Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.04]"
                  >
                    <Check className="w-4 h-4 text-nova-yellow mr-2 shrink-0 mt-0.5" />
                    <span className="text-nova-gray text-xs leading-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies and Tools Glowing tags */}
            {project.tools && project.tools.length > 0 && (
              <div className="mb-8">
                <h4 className="text-white text-xs font-semibold mb-3 tracking-wider uppercase opacity-90">
                  Technologies &amp; Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-nova-blue/10 border border-nova-blue/25 text-white/90 text-xs rounded-full shadow-inner hover:border-nova-yellow/40 hover:bg-nova-yellow/5 hover:text-white transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Footer Section */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <Button
              variant="primary"
              onClick={() => onBuildSimilar(project.title)}
              className="w-full group py-3.5 text-base flex justify-center items-center shadow-[0_0_24px_rgba(3,23,252,0.3)] hover:shadow-[0_0_32px_rgba(3,23,252,0.5)] transition-shadow duration-300 font-bold"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
