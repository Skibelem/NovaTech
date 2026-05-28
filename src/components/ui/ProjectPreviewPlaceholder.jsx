import React from 'react';

const ProjectPreviewPlaceholder = ({ projectTitle }) => {
  const isEduAlert = projectTitle.includes('EduAlert');
  const isCoffee = projectTitle.includes('Coffee');
  const isReferral = projectTitle.includes('Referral');

  return (
    <div className="w-full h-full bg-nova-darker relative overflow-hidden flex items-center justify-center p-6">

      {/* Universal Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-blue/10 to-transparent z-0"></div>

      {isEduAlert && (
        <div className="relative z-10 w-full h-full flex flex-col space-y-3">
          {/* Header */}
          <div className="w-full h-8 bg-white/5 rounded-md flex items-center px-3 space-x-2">
            <div className="w-4 h-4 rounded-full bg-nova-yellow/50"></div>
            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
          </div>
          {/* Main Grid */}
          <div className="flex-grow flex space-x-3">
            {/* Sidebar */}
            <div className="w-1/4 h-full bg-white/5 rounded-md flex flex-col space-y-2 p-2">
              <div className="w-full h-2 bg-white/10 rounded-full"></div>
              <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
              <div className="w-full h-2 bg-white/10 rounded-full"></div>
            </div>
            {/* Dashboard Area */}
            <div className="w-3/4 h-full flex flex-col space-y-3">
              <div className="flex space-x-3 h-1/3">
                <div className="flex-1 bg-nova-blue/20 rounded-md border border-nova-blue/30 relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-nova-blue/40 to-transparent"></div>
                </div>
                <div className="flex-1 bg-nova-yellow/15 rounded-md border border-nova-yellow/25 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-nova-yellow/40 border-t-nova-yellow"></div>
                </div>
              </div>
              <div className="flex-grow bg-white/5 rounded-md p-3 flex flex-col space-y-2">
                <div className="w-1/3 h-2 bg-white/20 rounded-full"></div>
                <div className="w-full flex-grow flex items-end space-x-2">
                  {[40, 70, 45, 90, 60, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCoffee && (
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* E-commerce Hero */}
          <div className="w-full h-1/2 bg-white/5 rounded-t-md relative overflow-hidden flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-nova-yellow/10 blur-xl absolute"></div>
            <div className="w-16 h-20 rounded-t-full rounded-b-lg bg-gradient-to-b from-white/20 to-white/5 z-10"></div>
          </div>
          {/* Product Grid */}
          <div className="w-full h-1/2 bg-white/5 rounded-b-md mt-2 flex space-x-2 p-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 bg-white/5 rounded flex flex-col items-center p-2 space-y-2">
                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                <div className="w-1/2 h-1.5 bg-nova-blue/50 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isReferral && (
        <div className="relative z-10 w-full h-full flex flex-col space-y-2">
          {/* Admin Header */}
          <div className="w-full h-6 flex justify-between items-center">
            <div className="w-24 h-3 bg-white/10 rounded-full"></div>
            <div className="w-6 h-6 rounded-full bg-white/10"></div>
          </div>
          {/* Stats row */}
          <div className="w-full h-10 flex space-x-2">
            <div className="flex-1 bg-nova-blue/20 rounded border border-nova-blue/20 flex flex-col justify-center p-2">
              <div className="w-4 h-4 text-nova-blue mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="w-8 h-2 bg-nova-blue/50 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white/5 rounded flex flex-col justify-center p-2">
               <div className="w-8 h-2 bg-white/20 rounded-full mb-2"></div>
               <div className="w-12 h-2 bg-white/10 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white/5 rounded flex flex-col justify-center p-2">
               <div className="w-8 h-2 bg-white/20 rounded-full mb-2"></div>
               <div className="w-12 h-2 bg-white/10 rounded-full"></div>
            </div>
          </div>
          {/* List Area */}
          <div className="flex-grow bg-white/5 rounded-md p-2 flex flex-col space-y-2">
            <div className="w-full h-3 border-b border-white/10 pb-1 flex justify-between">
              <div className="w-1/4 h-1.5 bg-white/20 rounded-full"></div>
              <div className="w-1/4 h-1.5 bg-white/20 rounded-full"></div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-6 bg-white/5 rounded flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
                </div>
                <div className="w-12 h-1.5 bg-nova-yellow/50 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectPreviewPlaceholder;
