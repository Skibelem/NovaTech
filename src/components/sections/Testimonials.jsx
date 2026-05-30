import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';
import { Quote } from 'lucide-react';
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
            className={`w-5 h-5 ${filled ? 'text-nova-yellow' : 'text-white/15'} transition-colors`}
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-nova-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-nova-yellow glow-yellow" />
            <p className="text-nova-yellow font-semibold tracking-wide uppercase text-sm">Client Feedback</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            What Clients Say About NovaTech
          </h2>

          <p className="text-white/70 mt-4 text-base md:text-lg leading-relaxed">
            Real feedback from businesses and organizations we’ve helped through modern digital solutions and product experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                delay: index * 0.10,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="glass-card p-7 md:p-8 rounded-3xl relative overflow-hidden
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5 hover:border-nova-blue/30"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-nova-blue/15 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-nova-yellow/10 blur-2xl" />
              </div>

              <Quote className="absolute top-7 right-7 w-10 h-10 text-white/6" />

              <div className="relative">
                <Stars rating={testimonial.rating} />

                <p className="text-white/80 leading-relaxed mb-8 italic">
                  “{testimonial.review}”
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.10]
                               flex items-center justify-center text-white font-semibold"
                    aria-hidden="true"
                    style={{
                      boxShadow: '0 0 0 1px rgba(3,23,252,0.15) inset',
                    }}
                  >
                    <span className="text-sm tracking-wide">{initialsFromName(testimonial.name)}</span>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-base sm:text-lg truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-nova-blue text-sm truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-white/55 text-xs mt-0.5 truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-nova-blue/20 via-white/10 to-nova-yellow/15 opacity-70" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
