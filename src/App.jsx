import React, { useState } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Packages from './components/sections/Packages';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';

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
        <Packages onPackageSelect={handlePackageSelect} />
        <Process />
        <Projects onProjectSelect={handleProjectSelect} />
        <Testimonials />
        <Contact selectedPackage={selectedPackage} selectedProject={selectedProject} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
