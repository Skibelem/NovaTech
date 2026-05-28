import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = ({ selectedPackage, selectedProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    budget: '$5k - $10k',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      let type = 'Website Development';
      if (selectedPackage === 'Business Booster') type = 'E-commerce';
      if (selectedPackage === 'Future Tech') type = 'Web App / Dashboard';
      
      setFormData(prev => ({
        ...prev,
        projectType: type
      }));
    } else if (selectedProject) {
      setFormData(prev => ({
        ...prev,
        projectType: selectedProject
      }));
    }
  }, [selectedPackage, selectedProject]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.projectType.trim()) newErrors.projectType = 'Project Type is required.';
    if (!formData.details.trim()) newErrors.details = 'Project Details is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        name: '', email: '', phone: '', projectType: 'Website Development', budget: '$5k - $10k', details: ''
      });
      setErrors({});
    }, 1500);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-nova-gray focus:outline-none focus:border-nova-blue focus:ring-1 focus:ring-nova-blue transition-colors";
  const errorClasses = "text-red-400 text-xs mt-1 absolute";

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build something extraordinary</h3>
          <p className="text-nova-gray text-lg">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-nova-yellow/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-nova-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
              <p className="text-nova-gray">Thank you! Your project request has been received. NovaTech will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {selectedPackage && (
                <div className="bg-nova-blue/10 border border-nova-blue/30 rounded-xl p-4 flex items-center justify-between mb-4">
                  <span className="text-nova-blue font-medium">Selected Package: {selectedPackage}</span>
                </div>
              )}
              {selectedProject && (
                <div className="bg-nova-yellow/10 border border-nova-yellow/30 rounded-xl p-4 flex items-center justify-between mb-4">
                  <span className="text-nova-yellow font-medium">Project selected: {selectedProject}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                <div className="relative">
                  <label className="block text-sm font-medium text-nova-gray mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`${inputClasses} ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}`} placeholder="John Doe" />
                  {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-nova-gray mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClasses} ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}`} placeholder="john@example.com" />
                  {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                <div className="relative">
                  <label className="block text-sm font-medium text-nova-gray mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`${inputClasses} ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}`} placeholder="+1 (555) 000-0000" />
                  {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-nova-gray mb-2">Project Type *</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClasses} appearance-none ${errors.projectType ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}`}>
                    <option value="Website Development">Website Development</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Web App / Dashboard">Web App / Dashboard</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="EduAlert AI">EduAlert AI</option>
                    <option value="Titans Coffee E-commerce">Titans Coffee E-commerce</option>
                    <option value="Referral Verification System">Referral Verification System</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && <p className={errorClasses}>{errors.projectType}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-nova-gray mb-2">Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                  <option value="Under $2k">Under $2,500</option>
                  <option value="$2.5k - $5k">$2,500 - $5,000</option>
                  <option value="$5k - $10k">$5,000 - $10,000</option>
                  <option value="$10k+">$10,000+</option>
                </select>
              </div>

              <div className="relative pb-2">
                <label className="block text-sm font-medium text-nova-gray mb-2">Project Details *</label>
                <textarea name="details" value={formData.details} onChange={handleChange} rows="4" className={`${inputClasses} ${errors.details ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}`} placeholder="Tell us about your project goals, timeline, and requirements..."></textarea>
                {errors.details && <p className={errorClasses}>{errors.details}</p>}
              </div>

              <Button variant="primary" type="submit" className="w-full text-lg py-4 mt-4" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
