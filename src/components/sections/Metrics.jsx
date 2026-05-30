import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Headphones, Target } from 'lucide-react';
import Reveal from '../ui/Reveal';

const metricsData = [
  {
    id: 'metric-1',
    value: '3+',
    label: 'Projects Delivered',
    description: 'Successfully designed and developed digital products across multiple industries.',
    icon: Briefcase,
    color: '#0317fc', // NovaTech Blue
  },
  {
    id: 'metric-2',
    value: '100%',
    label: 'Mobile Responsive',
    description: 'Every solution is optimized for desktop, tablet, and mobile experiences.',
    icon: Smartphone,
    color: '#fcfc03', // NovaTech Yellow
  },
  {
    id: 'metric-3',
    value: '24/7',
    label: 'Project Support',
    description: 'Committed to clear communication and reliable support throughout project delivery.',
    icon: Headphones,
    color: '#0317fc', // NovaTech Blue
  },
  {
    id: 'metric-4',
    value: '100%',
    label: 'Client-Focused',
    description: 'Every project is built around client goals, user needs, and business outcomes.',
    icon: Target,
    color: '#fcfc03', // NovaTech Yellow
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className="py-24 relative bg-[#02030a] overflow-hidden border-t border-b border-white/5">
      {/* Background Soft Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-nova-blue/5 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-nova-yellow/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <span className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3.5 block">
              Why Businesses Choose NovaTech
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              Built for Performance, Quality, and Growth
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-nova-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We combine modern design, scalable development, and business-focused solutions to help brands launch and grow with confidence.
            </p>
          </Reveal>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metricsData.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: 'transform' }}
                className="group relative bg-white/[0.01] backdrop-blur-md rounded-[32px] border border-white/10 p-8 flex flex-col items-start transition-all duration-500 ease-out hover:-translate-y-2 hover:border-nova-blue/30 hover:shadow-[0_15px_35px_rgba(3,23,252,0.12),_0_0_20px_rgba(252,252,3,0.04)]"
              >
                {/* Subtle colored accent glow inside card */}
                <div
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${metric.color}0d 0%, transparent 70%)`
                  }}
                />

                {/* Glassmorphic Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-nova-blue/30 group-hover:bg-nova-blue/5">
                  <IconComponent className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-nova-yellow" />
                </div>

                {/* Metric Value */}
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 select-none">
                  {metric.value}
                </span>

                {/* Supporting Label */}
                <span className="text-sm font-bold text-nova-yellow tracking-wide mb-3 uppercase group-hover:text-white transition-colors duration-300">
                  {metric.label}
                </span>

                {/* Short Description */}
                <p className="text-nova-gray text-xs sm:text-sm leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Metrics;
