'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Check if we are on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/pureum-logo.jpg"
            alt="Pureum Software Logo"
            className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#007AFF] transition-colors">
            Pureum Software
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
          <a
            href="/#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="/#my-works"
            onClick={(e) => handleScroll(e, 'my-works')}
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="mailto:info@pureum.dev"
            className="px-4 py-2 bg-white/5 hover:bg-[#007AFF] text-white rounded-full transition-all duration-300 font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
