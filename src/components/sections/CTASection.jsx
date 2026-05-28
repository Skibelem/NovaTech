import React from 'react';
import Button from '../ui/Button';
import { MessageCircle } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';

const CTASection = () => {
  const whatsappNumber = "+2340000000000";
  const whatsappMessage = encodeURIComponent("Hello NovaTech, I would like to discuss a project.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-nova-blue/15 to-nova-yellow/10 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-nova-dark rounded-full blur-[100px] z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal className="mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-none">Ready to scale your business?</h2>
          <p className="text-xl text-nova-gray max-w-2xl mx-auto">
            Join dozens of successful brands that trust NovaTech to deliver exceptional digital experiences.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg" onClick={() => scrollToSection('contact')}>
              Work With Us
            </Button>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.975, y: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 ease-in-out bg-[#25D366] text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full sm:w-auto text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
