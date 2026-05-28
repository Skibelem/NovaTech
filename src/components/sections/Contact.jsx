import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

/**
 * ─── Formspree endpoint ──────────────────────────────────────────────────────
 * 1) Sign up: https://formspree.io
 * 2) Create a new form → copy your Form ID
 * 3) Replace the placeholder below with your real Form ID (e.g. "xpwzgkbd")
 *
 * Destination (business email/domain) can be changed later by swapping the
 * Formspree form target—frontend stays the same.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzylbee';

/**
 * Formspree integration notes:
 * - If you see "form not found", the Form ID/endpoint is not correct.
 * - For convenience (no redeploy), you can override the endpoint at runtime:
 *   window.__FORMSPREE_ENDPOINT__ = 'https://formspree.io/f/XXXXXXX';
 */
const getFormsPreeEndpoint = () => {
  try {
    if (typeof window !== 'undefined' && window.__FORMSPREE_ENDPOINT__) {
      return window.__FORMSPREE_ENDPOINT__;
    }
  } catch {
    // ignore
  }
  return FORMSPREE_ENDPOINT;
};

// ─── Inline spinner ──────────────────────────────────────────────────────────
const Spinner = () => (
  <svg
    className="animate-spin w-5 h-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

// ─── Success card ─────────────────────────────────────────────────────────────
const SuccessCard = ({ onReset }) => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.97, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97, y: -10 }}
    transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
    className="text-center py-16 flex flex-col items-center"
  >
    {/* Animated check ring */}
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.15, type: 'spring', stiffness: 320, damping: 22 }}
      className="w-20 h-20 bg-nova-yellow/15 rounded-full flex items-center justify-center mb-6 ring-2 ring-nova-yellow/30"
    >
      <svg className="w-10 h-10 text-nova-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        />
      </svg>
    </motion.div>

    <motion.h4
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="text-2xl font-bold text-white mb-3"
    >
      Message sent successfully!
    </motion.h4>
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="text-nova-gray max-w-md leading-relaxed mb-8"
    >
      Thanks for reaching out. The NovaTech team will review your inquiry and get back to you within&nbsp;24&nbsp;hours.
    </motion.p>
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      onClick={onReset}
      className="text-sm text-nova-gray hover:text-nova-yellow transition-colors duration-200 underline underline-offset-4"
    >
      Submit another inquiry
    </motion.button>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────────────────
const Contact = ({ selectedPackage, selectedProject }) => {
  const EMPTY_FORM = {
    name: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    details: '',
    _honey: '', // honeypot – bots fill this; humans don't see it
  };

  const [formData, setFormData]       = useState(EMPTY_FORM);
  const [errors, setErrors]           = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [submitError, setSubmitError] = useState('');
  const submitLock                    = useRef(false);   // duplicate-click guard

  // ── Auto-fill when user arrives from package/project CTA ──────────────────
  useEffect(() => {
    if (selectedPackage) {
      let type = 'Website Development';
      if (selectedPackage === 'Business Booster') type = 'E-commerce';
      if (selectedPackage === 'Future Tech')       type = 'Web App / Dashboard';
      setFormData(prev => ({ ...prev, projectType: type }));
    } else if (selectedProject) {
      setFormData(prev => ({ ...prev, projectType: selectedProject }));
    }
  }, [selectedPackage, selectedProject]);

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Full name is required.';
    if (!formData.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim())   e.phone   = 'Phone number is required.';
    if (!formData.details.trim()) e.details = 'Please describe your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: null }));
    if (submitError) setSubmitError('');
  };

  // ── Submission ─────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitLock.current || isSubmitting) return;   // prevent double-click
    if (!validate()) return;
    if (formData._honey) return;                       // honeypot triggered → silent drop

    submitLock.current = true;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const endpoint = getFormsPreeEndpoint();

      // Formspree is happiest with FormData (URL-encoded multipart/form-data).
      // We also include both "details" and "message" so whichever fields are
      // configured in your Formspree form will receive the inquiry.
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);

      // Common friendly aliases
      fd.append('projectType', formData.projectType);
      fd.append('project_type', formData.projectType);

      fd.append('details', formData.details);
      fd.append('message', formData.details);

      // Surface package/project context
      if (selectedPackage) fd.append('selectedPackage', selectedPackage);
      if (selectedProject) fd.append('selectedProject', selectedProject);
      // honeypot
      fd.append('_honey', formData._honey);

      const res = await fetch(endpoint, {
        method: 'POST',
        body: fd,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData(EMPTY_FORM);
        setErrors({});
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(
          data?.errors?.[0]?.message ||
          'Something went wrong. Please try again or contact us via WhatsApp.'
        );
      }
    } catch {
      setSubmitError('Network error — please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      submitLock.current = false;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(EMPTY_FORM);
    setErrors({});
    setSubmitError('');
  };

  // ── Style helpers ──────────────────────────────────────────────────────────
  const inputBase =
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-nova-gray focus:outline-none focus:ring-1 transition-colors duration-200';
  const inputNormal  = `${inputBase} border-white/10 focus:border-nova-blue focus:ring-nova-blue`;
  const inputInvalid = `${inputBase} border-red-400/60 focus:border-red-400 focus:ring-red-400`;
  const fieldCls = (key) => (errors[key] ? inputInvalid : inputNormal);

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-16">
          <h2 className="text-nova-yellow font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build something extraordinary</h3>
          <p className="text-nova-gray text-lg">Fill out the form below and our team will get back to you within 24 hours.</p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 }}
          className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessCard key="success" onReset={handleReset} />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* ── Honeypot (hidden from real users) ── */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                  autoComplete="off"
                />

                {/* ── Context banners (package / project) ── */}
                <AnimatePresence>
                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      className="bg-nova-blue/10 border border-nova-blue/30 rounded-xl p-4"
                    >
                      <span className="text-nova-blue font-medium text-sm">
                        📦 Selected Package: <strong>{selectedPackage}</strong>
                      </span>
                    </motion.div>
                  )}
                  {selectedProject && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      className="bg-nova-yellow/10 border border-nova-yellow/30 rounded-xl p-4"
                    >
                      <span className="text-nova-yellow font-medium text-sm">
                        🚀 Build similar to: <strong>{selectedProject}</strong>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Row 1: Name + Email ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-name" className="text-sm font-medium text-nova-gray">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={fieldCls('name')}
                    />
                    {errors.name && (
                      <p id="err-name" className="text-red-400 text-xs flex items-center gap-1">
                        <span aria-hidden>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-email" className="text-sm font-medium text-nova-gray">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={fieldCls('email')}
                    />
                    {errors.email && (
                      <p id="err-email" className="text-red-400 text-xs flex items-center gap-1">
                        <span aria-hidden>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ── Row 2: Phone + Project Type ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-phone" className="text-sm font-medium text-nova-gray">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className={fieldCls('phone')}
                    />
                    {errors.phone && (
                      <p id="err-phone" className="text-red-400 text-xs flex items-center gap-1">
                        <span aria-hidden>⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-projectType" className="text-sm font-medium text-nova-gray">
                      Project Type
                    </label>
                    <select
                      id="cf-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`${inputNormal} appearance-none`}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Web App / Dashboard">Web App / Dashboard</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="EduAlert AI">EduAlert AI</option>
                      <option value="Titans Coffee E-commerce">Titans Coffee E-commerce</option>
                      <option value="Referral Verification System">Referral Verification System</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* ── Project Details ── */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-details" className="text-sm font-medium text-nova-gray">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="cf-details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                    aria-invalid={!!errors.details}
                    aria-describedby={errors.details ? 'err-details' : undefined}
                    className={fieldCls('details')}
                  />
                  {errors.details && (
                    <p id="err-details" className="text-red-400 text-xs flex items-center gap-1">
                      <span aria-hidden>⚠</span> {errors.details}
                    </p>
                  )}
                </div>

                {/* ── Submission error banner ── */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      role="alert"
                      className="flex items-start gap-3 bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3 text-red-400 text-sm"
                    >
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Submit button ── */}
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg py-4 mt-2 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner />
                      <span>Sending…</span>
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>

                <p className="text-center text-xs text-nova-gray/60 pt-1">
                  By submitting you agree that NovaTech may contact you about your inquiry.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
