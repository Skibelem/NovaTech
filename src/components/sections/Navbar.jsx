import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const navLinks = [
  { label: 'Home',       id: 'home'        },
  { label: 'Services',   id: 'services'    },
  { label: 'Work',       id: 'work'        },
  { label: 'Process',    id: 'process'     },
  { label: 'Packages',   id: 'packages'    },
  { label: 'Reviews',    id: 'testimonials'},
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll tracking to trigger glassmorphism state transitions
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightweight Intersection Observer for Active Section Highlighting
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // Triggers when section is focus center
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNav = (id) => {
    setActiveLink(id);
    setMobileOpen(false);
    scrollToSection(id);
  };

  // Custom Hamburger Bar Animation variants for Mobile Icon
  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      y: i === 0 ? -6 : i === 2 ? 6 : 0,
      opacity: 1,
      transition: { duration: 0.25, ease: 'easeInOut' }
    }),
    open: (i) => ({
      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
      y: 0,
      opacity: i === 1 ? 0 : 1,
      transition: { duration: 0.25, ease: 'easeInOut' }
    })
  };

  // Framer Motion variants for mobile floating glass container
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
      scale: 0.96,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'py-3 bg-nova-darker/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'py-5 md:py-6 bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Area */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 group relative focus:outline-none"
            aria-label="NovaTech Homepage"
          >
            <div className="relative flex items-center justify-center">
              <Code2 className="w-7 h-7 text-nova-blue transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-nova-yellow group-hover:drop-shadow-[0_0_8px_rgba(3,23,252,0.6)]" />
              <div className="absolute -inset-1 bg-nova-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight logo-text-glow">
              NovaTech<span className="text-nova-yellow transition-all duration-300 group-hover:animate-pulse">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 bg-white/[0.02] border border-white/[0.04] backdrop-blur-md rounded-full px-8 py-2.5">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  activeLink === id
                    ? 'nav-link-active'
                    : 'text-nova-gray/80 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('contact')}
              className="cta-btn-premium"
            >
              Start a Project
            </button>
          </div>

          {/* Premium Animated Hamburger Icon */}
          <button
            className="md:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors focus:outline-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle Navigation Menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                custom={i}
                variants={lineVariants}
                animate={mobileOpen ? 'open' : 'closed'}
                className="absolute w-5 h-0.5 bg-white rounded-full"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Upgraded Premium Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-[calc(100%+12px)] left-4 right-4 md:hidden overflow-hidden bg-nova-darker/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ label, id }) => (
                <motion.div key={id} variants={itemVariants}>
                  <button
                    onClick={() => handleNav(id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                      activeLink === id
                        ? 'text-nova-yellow bg-nova-yellow/[0.06] border border-nova-yellow/10'
                        : 'text-white/80 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-nova-yellow shadow-[0_0_8px_rgba(252,252,3,0.8)] transition-opacity duration-200 ${
                        activeLink === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </button>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-3 mt-1 border-t border-white/10">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full text-center py-3 text-sm font-bold bg-nova-blue text-white rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(252,252,3,0.3)] active:scale-[0.98]"
                >
                  Start a Project
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;