import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nova-darker disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm';

  const variants = {
    primary:
      'bg-nova-blue text-white hover:bg-nova-blue/90 hover:shadow-[0_0_24px_rgba(3,23,252,0.45)] focus:ring-nova-blue',
    secondary:
      'bg-transparent border border-nova-yellow text-nova-yellow hover:bg-nova-yellow/10 hover:shadow-[0_0_20px_rgba(252,252,3,0.25)] focus:ring-nova-yellow',
    outline:
      'bg-transparent border border-white/20 text-white hover:border-nova-yellow hover:text-nova-yellow hover:shadow-[0_0_16px_rgba(252,252,3,0.2)] focus:ring-nova-yellow',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.025, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.975, y: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;