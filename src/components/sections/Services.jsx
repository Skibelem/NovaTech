import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/content';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 relative bg-nova-darker/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Solutions for Modern Brands</h3>
          <p className="text-nova-gray text-lg">
            From stunning visual designs to complex architectural systems, we provide end-to-end digital services to accelerate your growth.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 hover:-translate-y-2 hover:border-nova-blue/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-nova-blue/10 flex items-center justify-center mb-6 group-hover:bg-nova-blue/20 transition-colors">
                  <Icon className="w-7 h-7 text-nova-yellow" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-nova-yellow transition-colors">
                  {service.title}
                </h4>
                <p className="text-nova-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
