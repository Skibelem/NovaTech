import React from 'react';
import { Code2, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const Footer = () => {
  return (
    <footer className="bg-nova-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="w-8 h-8 text-nova-blue" />
              <span className="text-2xl font-bold text-white tracking-tight">NovaTech<span className="text-nova-yellow">.</span></span>
            </div>
            <p className="text-nova-gray mb-6 max-w-sm">
              We build digital solutions that move your business forward. Premium quality, modern design, and scalable architecture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-nova-gray hover:text-white hover:bg-nova-blue transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-nova-gray hover:text-white hover:bg-nova-blue transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-nova-gray hover:text-white hover:bg-nova-blue transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-nova-gray hover:text-white hover:bg-nova-blue transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('services')} className="text-nova-gray hover:text-nova-yellow transition-colors">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-nova-gray hover:text-nova-yellow transition-colors">E-commerce</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-nova-gray hover:text-nova-yellow transition-colors">UI/UX Design</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-nova-gray hover:text-nova-yellow transition-colors">Dashboards</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('work')} className="text-nova-gray hover:text-nova-yellow transition-colors">Our Work</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-nova-gray hover:text-nova-yellow transition-colors">Process</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="text-nova-gray hover:text-nova-yellow transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-nova-gray hover:text-nova-yellow transition-colors">Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nova-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NovaTech Digital Agency. All rights reserved. | <a href="mailto:hello@novatech.studio" className="hover:text-white transition-colors">hello@novatech.studio</a> | <a href="tel:+2340000000000" className="hover:text-white transition-colors">+234 000 000 0000</a>
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-nova-gray hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-nova-gray hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
