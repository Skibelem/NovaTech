import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layers, Zap, Shield, Headphones } from 'lucide-react';
import Reveal from '../ui/Reveal';

const valuesData = [
  {
    id: 'val-1',
    title: 'Modern UI/UX Design',
    description: 'Beautiful, intuitive, and user-focused interfaces that create memorable digital experiences.',
    icon: Monitor,
    color: '#0317fc', // NovaTech Blue
  },
  {
    id: 'val-2',
    title: 'Mobile-First Development',
    description: 'Every solution is optimized for phones, tablets, and desktops from the start.',
    icon: Smartphone,
    color: '#fcfc03', // NovaTech Yellow
  },
  {
    id: 'val-3',
    title: 'Scalable Architecture',
    description: 'Built with growth in mind, allowing businesses to expand without rebuilding from scratch.',
    icon: Layers,
    color: '#0317fc', // NovaTech Blue
  },
  {
    id: 'val-4',
    title: 'Performance Optimization',
    description: 'Fast-loading, responsive applications designed to keep users engaged.',
    icon: Zap,
    color: '#fcfc03', // NovaTech Yellow
  },
  {
    id: 'val-5',
    title: 'Secure & Reliable',
    description: 'Security best practices and dependable systems designed to protect users and business operations.',
    icon: Shield,
    color: '#0317fc', // NovaTech Blue
  },
  {
    id: 'val-6',
    title: 'Ongoing Support',
    description: 'Reliable communication and support throughout the project lifecycle and beyond launch.',
    icon: Headphones,
    color: '#fcfc03', // NovaTech Yellow
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 relative bg-nova-dark overflow-hidden border-b border-white/5">
      {/* Background Soft Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-nova-blue/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-nova-yellow/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <span className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3.5 block">
              Why Choose NovaTech
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              More Than Development. We Build Digital Growth.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-nova-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We combine modern design, scalable technology, and business-focused thinking to create digital solutions that help brands stand out and grow.
            </p>
          </Reveal>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valuesData.map((val, index) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white/[0.01] backdrop-blur-md rounded-[32px] border border-white/10 p-8 flex flex-col items-start transition-all duration-500 ease-out hover:-translate-y-2 hover:border-nova-blue/30 hover:shadow-[0_15px_35px_rgba(3,23,252,0.12),_0_0_20px_rgba(252,252,3,0.04)]"
              >
                {/* Subtle colored accent glow inside card */}
                <div
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${val.color}0d 0%, transparent 70%)`
                  }}
                />

                {/* Glassmorphic Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-nova-blue/30 group-hover:bg-nova-blue/5">
                  <IconComponent className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-nova-yellow" />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-nova-yellow transition-colors duration-300">
                  {val.title}
                </h3>

                {/* Feature Description */}
                <p className="text-nova-gray text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
