import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal Component
 * Standardizes premium scroll-reveal fade-up animations.
 * Keeps motion lightweight and elegant by utilizing GPU-friendly properties (opacity, translateY).
 */
export const Reveal = ({ 
  children, 
  delay = 0, 
  y = 15, 
  duration = 0.6, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.215, 0.61, 0.355, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
