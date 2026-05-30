import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';
import { Quote, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';

const initialsFromName = (name = '') =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

const Stars = ({ rating = 0 }) => {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="flex items-center gap-1 mb-5" aria-label={`Rating: ${safeRating} out of 5`}>
      {[...Array(5)].map((_, i) => {
        const filled = i < safeRating;
        return (
          <svg
            key={i}
            className={`w-4 h-4 ${
              filled 
                ? 'text-nova-yellow drop-shadow-[0_0_6px_rgba(252,252,3,0.8)]' 
                : 'text-white/10'
            } transition-colors`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

const avatarGradients = [
  'from-nova-blue via-indigo-600 to-purple-600',
  'from-nova-yellow via-amber-500 to-orange-500',
  'from-teal-400 via-cyan-500 to-nova-blue',
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#02030a] overflow-hidden border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-[450px] h-[450px] rounded-full bg-nova-blue/5 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 w-[450px] h-[450px] rounded-full bg-nova-yellow/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-nova-yellow shadow-[0_0_6px_rgba(252,252,3,0.8)]" />
              <p className="text-nova-yellow font-semibold tracking-wide uppercase text-sm">Client Feedback</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              What Clients Say About NovaTech
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-nova-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Feedback from projects we've designed and developed across AI, E-commerce, and FinTech solutions.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white/[0.01] backdrop-blur-md p-8 sm:p-9 rounded-[32px] border border-white/10 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2.5 hover:border-nova-blue/30 hover:shadow-[0_20px_50px_rgba(3,23,252,0.18),_0_0_30px_rgba(252,252,3,0.06)]"
            >
              {/* Subtle hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${index % 2 === 0 ? '#0317fc' : '#fcfc03'}0a 0%, transparent 70%)`
                }}
              />

              {/* Decorative Quote Mark */}
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none" />

              {/* Verified Project Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/15 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-inner select-none transition-colors group-hover:border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Verified Client
                </span>
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <Stars rating={testimonial.rating} />

                  {/* Review Text */}
                  <p className="text-nova-gray/95 text-[14px] leading-relaxed mb-8 italic font-medium group-hover:text-white transition-colors duration-300">
                    “{testimonial.review}”
                  </p>
                </div>

                {/* Client Bio Block */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                  
                  {/* Circular Premium Initials Avatar */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${
                      avatarGradients[index % avatarGradients.length]
                    } flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(3,23,252,0.2)] border border-white/20 shrink-0 transition-transform duration-300 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <span>{initialsFromName(testimonial.name)}</span>
                  </div>

                  <div className="min-w-0 flex-grow">
                    <h4 className="text-white font-extrabold text-base tracking-tight truncate group-hover:text-nova-yellow transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-1.5 text-xs text-nova-blue font-bold">
                      <span className="truncate">{testimonial.role}</span>
                      <span className="text-white/20 select-none">•</span>
                      <span className="text-white/60 truncate">{testimonial.company}</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
