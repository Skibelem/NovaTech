import React, { useState } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';
import WhatsAppFloatingCTA from './components/ui/WhatsAppFloatingCTA';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePackageSelect = (pkgName) => {
    setSelectedPackage(pkgName);
    setSelectedProject(null);
  };

  const handleProjectSelect = (projectName) => {
    setSelectedProject(projectName);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen font-sans bg-nova-dark text-white selection:bg-nova-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects onProjectSelect={handleProjectSelect} />
        <Testimonials />
        <Contact selectedPackage={selectedPackage} selectedProject={selectedProject} />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingCTA />
    </div>
  );
}

export default App;
