import React from 'react';
import logoPng from '../../assets/projects/logo.png';

const Logo = ({
  className = '',
  iconClassName = '',
  textClassName = '',
  vertical = false,
  onClick,
  ariaLabel,
}) => {
  const content = (
    <div className={`flex ${vertical ? 'flex-col items-center space-y-4' : 'items-center space-x-3'} group relative`}>
      <div className="relative flex items-center justify-center">
        {/* Render the actual brand logo image from assets */}
        <img
          src={logoPng}
          alt="NovaTech Logo"
          className={`object-contain transition-all duration-500 group-hover:rotate-[360deg] group-hover:drop-shadow-[0_0_12px_rgba(3,23,252,0.6)] ${
            iconClassName || (vertical ? 'w-20 h-20' : 'w-7 h-7')
          }`}
        />
        <div
          className={`absolute -inset-1 bg-nova-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ${
            vertical ? '-inset-3 blur-xl' : ''
          }`}
        ></div>
      </div>
      <span
        className={`font-bold text-white tracking-tight logo-text-glow ${
          textClassName || (vertical ? 'text-3xl' : 'text-xl')
        }`}
      >
        NovaTech
        <span className="text-nova-yellow transition-all duration-300 group-hover:animate-pulse">
          .
        </span>
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`focus:outline-none ${className}`}
        aria-label={ariaLabel || 'NovaTech'}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
};

export default Logo;
