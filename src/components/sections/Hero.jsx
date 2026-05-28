import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1] 
      } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients with slow glowing motion */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-nova-blue/15 blur-[120px]" 
        />
        <motion.div 
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 15, -15, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-nova-yellow/10 blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1
                }
              }
            }}
            className="flex flex-col space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/5 border border-nova-yellow/20 rounded-full px-4 py-2 w-fit backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-nova-yellow animate-pulse"></span>
              <span className="text-sm font-medium text-nova-gray">We are taking new projects</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
            >
              Tech That Moves Your <br />
              <span className="text-gradient">Business Forward.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-nova-gray max-w-xl leading-relaxed"
            >
              We build premium websites, intuitive dashboards, and robust digital systems designed to scale your operations and skyrocket your conversions.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Button variant="primary" className="group" onClick={() => scrollToSection('contact')}>
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('services')}>
                <PlayCircle className="mr-2 w-5 h-5" />
                Explore Services
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-nova-gray">Projects Delivered</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">99%</span>
                <span className="text-sm text-nova-gray">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Tech Dashboard Mockup"
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-transparent to-transparent opacity-60"></div>

              {/* Floating Element Mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 glass-card p-4 rounded-xl hidden md:flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-nova-blue/20 flex items-center justify-center">
                  <span className="text-nova-yellow font-bold">↑</span>
                </div>
                <div>
                  <p className="text-xs text-nova-gray">Conversion Rate</p>
                  <p className="text-lg font-bold text-white">+24.8%</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
