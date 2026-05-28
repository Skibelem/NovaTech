import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WhatsAppFloatingCTA Component
 * Renders a fixed, premium floating CTA button at the bottom-right corner.
 * Triggers an elegant viewport entrance animation and expands on desktop hover.
 */
const WhatsAppFloatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // URL encoded prefilled message: "Hello NovaTech, I would like to discuss a project."
  const whatsappUrl = "https://wa.me/2348059587866?text=Hello%20NovaTech%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  // High-fidelity SVG icon for the official WhatsApp brand mark
  const WhatsAppIcon = () => (
    <svg 
      className="w-6 h-6 fill-current shrink-0" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 280, 
        damping: 22, 
        delay: 1.6 // Elegant entry, sliding in after the main hero has fully rendered
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex items-center bg-[#25D366] text-white rounded-full p-3.5 sm:p-4 shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] border border-white/10 select-none group"
      aria-label="Chat on WhatsApp with NovaTech Support"
    >
      <WhatsAppIcon />
      
      {/* Smooth expanding desktop label */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="hidden md:inline-block font-semibold text-sm whitespace-nowrap overflow-hidden pr-1.5"
          >
            Chat with NovaTech
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default WhatsAppFloatingCTA;
