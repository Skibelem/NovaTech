import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../data/content';

const Process = () => {
  return (
    <section id="process" className="py-24 relative bg-nova-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">How we bring your vision to life</h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-nova-blue/20 via-nova-yellow/40 to-nova-blue/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {processData.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-6 text-xl font-bold text-nova-yellow group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(252,252,3,0.25)] transition-all duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-nova-gray text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
