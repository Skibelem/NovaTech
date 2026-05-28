import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { packagesData } from '../../data/content';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scroll';

const Packages = ({ onPackageSelect }) => {
  const handleSelect = (pkgName) => {
    if (onPackageSelect) onPackageSelect(pkgName);
    scrollToSection('contact');
  };
  return (
    <section id="packages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Packages tailored for your growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packagesData.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-nova-blue/20 to-nova-darker border border-nova-blue/50 shadow-[0_0_40px_rgba(3,23,252,0.15)] transform md:-translate-y-4'
                  : 'glass-card'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-nova-blue to-nova-yellow text-nova-dark px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-nova-gray text-sm mb-6 h-10">{pkg.description}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                  {pkg.price !== 'Custom' && <span className="text-nova-gray text-sm">/project</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-nova-yellow mr-3 shrink-0 mt-0.5" />
                    <span className="text-nova-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => handleSelect(pkg.name)}
              >
                Choose {pkg.target}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
