import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

function Preloader({ isVisible = true }) {
  // Variants for the backdrop container fade out
  const overlayVariants = {
    initial: { 
      opacity: 1,
      visibility: 'visible',
    },
    animate: {
      opacity: 1,
      visibility: 'visible',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutQuart
      },
      transitionEnd: {
        visibility: 'hidden',
      }
    }
  };

  // Variants for the inner card content
  const contentVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  // Variants for subtitle reveal
  const subtitleVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: 'easeOut',
      }
    }
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#02030a] to-[#050816] select-none pointer-events-auto"
    >
      {/* Background soft ambient glowing circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0317fc] blur-[120px]"
        />
        {/* Soft Yellow Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#fcfc03] blur-[100px]"
        />
      </div>

      {/* Main Glassmorphism Card */}
      <motion.div
        variants={contentVariants}
        className="relative z-10 w-[min(480px,calc(100vw-32px))] p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.6)] text-center flex flex-col items-center"
      >
        {/* Logo Container with elegant pulse glowing ring */}
        <div className="relative mb-4 group flex flex-col items-center">
          {/* Logo glow pulse background */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.35, 0.5, 0.35],
              boxShadow: [
                "0 0 20px rgba(3, 23, 252, 0.25), 0 0 10px rgba(252, 252, 3, 0.1)",
                "0 0 35px rgba(3, 23, 252, 0.45), 0 0 20px rgba(252, 252, 3, 0.25)",
                "0 0 20px rgba(3, 23, 252, 0.25), 0 0 10px rgba(252, 252, 3, 0.1)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full blur-xl bg-gradient-to-tr from-[#0317fc]/15 to-[#fcfc03]/5 pointer-events-none"
          />

          {/* Reusable Brand Logo component in vertical mode */}
          <Logo
            vertical={true}
            className="relative z-10"
            iconClassName="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(3,23,252,0.4)]"
            textClassName="text-3xl md:text-4xl font-black tracking-tight text-white"
          />
        </div>

        {/* Custom slogan underneath */}
        <motion.p
          variants={subtitleVariants}
          className="text-nova-gray text-sm md:text-base font-medium tracking-wide mt-3 px-4 max-w-sm leading-relaxed"
        >
          Building Digital Experiences That Matter
        </motion.p>

        {/* Subtle, premium progress line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0317fc]/30 to-transparent my-6" />

        {/* Premium, clean, minimalist loading state */}
        <div className="flex items-center space-x-2.5 text-xs text-nova-gray/50 uppercase tracking-widest font-semibold">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Initializing Studio
          </motion.span>
          <span className="flex space-x-1.5 items-center">
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-nova-yellow"
            />
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-nova-yellow"
            />
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-nova-yellow"
            />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Preloader;
