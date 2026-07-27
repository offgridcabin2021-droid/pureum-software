'use client';

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {

  useEffect(() => {
    // Trigger Unicorn Studio initialization when component mounts
    if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
      window.UnicornStudio.init();
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-[#050505]">
      {/* Background Layer - Unicorn Studio */}
      <div className="absolute inset-0 z-0">
        <div
          data-us-project="zPA82AZTRoXfE9VYgdVx"
          className="w-full h-full"
        ></div>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90 pointer-events-none"></div>
      </div>

      {/* Top Left Branding - Positioned below Navbar (h-20) */}


      {/* Main Content - Left Aligned & Positioned below logo */}
      <div className="relative z-10 flex-grow flex flex-col justify-start px-6 md:px-16 lg:px-24 pt-[200px] pb-32">

        {/* Decorative Tagline */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-8 md:w-12 h-[3px] bg-[#00BFFF] rounded-full shadow-[0_0_10px_rgba(0,191,255,0.4)]"></div>
          <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-[#00BFFF] uppercase drop-shadow-sm">Mobile First Engineering</span>
        </div>

        {/* Description */}
        <p className="max-w-sm text-gray-300 font-light leading-relaxed text-sm border-l-2 border-white/20 pl-4 md:pl-6 backdrop-blur-sm bg-black/10 rounded-r-lg py-2">
          Specializing in high-performance iOS & Android applications. We turn complex ideas into seamless mobile experiences.
        </p>
      </div>

      {/* Bottom Right Button Section */}
      <div className="absolute bottom-10 left-6 right-6 md:left-auto md:right-16 lg:right-24 z-20 flex items-center justify-end">
        <a
          href="#my-works"
          onClick={(e) => handleScroll(e, 'my-works')}
          className="hidden md:flex group relative overflow-hidden bg-white/5 backdrop-blur-md md:bg-black/30 border border-white/20 hover:border-[#007AFF] text-white px-8 py-5 md:px-10 md:py-5 transition-all duration-500 w-full md:w-auto text-center rounded-2xl md:rounded-none shadow-lg"
        >
          <div className="absolute inset-0 w-0 bg-[#007AFF] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
          <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-4 group-hover:text-[#007AFF] transition-colors">
            View Work
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;