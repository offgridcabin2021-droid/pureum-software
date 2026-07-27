'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const TechStackAndFooter: React.FC = () => {
  const techList = [
    { name: 'Next.js 15', icon: 'ri:nextjs-fill' },
    { name: 'React 19', icon: 'ri:reactjs-line' },
    { name: 'TypeScript', icon: 'devicon-plain:typescript' },
    { name: 'Swift (iOS)', icon: 'ri:apple-fill' },
    { name: 'Kotlin (Android)', icon: 'ri:android-fill' },
    { name: 'Tailwind CSS', icon: 'ri:tailwindcss-fill' },
    { name: 'Cloudflare Pages', icon: 'devicon-plain:cloudflare' },
    { name: 'Firebase', icon: 'ri:firebase-fill' },
  ];

  return (
    <div className="bg-[#050505] text-white pt-12 pb-16 px-6 md:px-12 lg:px-24 scroll-mt-24" id="about">
      {/* 1. Tech Stack Showcase Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#007AFF] mb-3 block">
            Modern Tech Stack
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
            Engineered with Cutting-Edge Tools
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            We leverage industry-standard technologies to ensure high performance, security, and lightning-fast responsiveness across all platforms.
          </p>
        </div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techList.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#0F1115] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:border-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <Icon icon={tech.icon} className="text-3xl text-gray-400 group-hover:text-[#007AFF] transition-colors" />
              <span className="text-xs font-semibold text-gray-300 tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Key Stats & Values */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="bg-[#0F1115] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#007AFF] flex items-center justify-center mb-6 text-xl">
              <Icon icon="solar:speedometer-bold" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">High Performance</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Optimized for maximum speed, minimal latency, and smooth 60fps animations on both mobile and web.
            </p>
          </div>
        </div>

        <div className="bg-[#0F1115] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 text-xl">
              <Icon icon="solar:shield-check-bold" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Robust data encryption, secure authentication, and HIPAA/GDPR compliant architecture where required.
            </p>
          </div>
        </div>

        <div className="bg-[#0F1115] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 text-xl">
              <Icon icon="solar:devices-bold" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Cross-Platform Sync</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Unified database and state management for seamless synchronization across iOS, Android, and Web browsers.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Call to Action Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0F1115] via-[#151922] to-[#0F1115] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden mb-20 shadow-2xl">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#007AFF]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Ready to Engineer Your Future?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-8 font-light leading-relaxed">
            Have an innovative app concept or need an enterprise web application? Let's turn your vision into reality.
          </p>
          <a
            href="mailto:info@pureum.dev"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#007AFF]/30 hover:scale-105"
          >
            Get In Touch
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </a>
        </div>
      </div>

      {/* 4. Footer with Schema.org NAP for GEO */}
      <footer
        className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6"
        aria-label="Site footer"
        itemScope
        itemType="https://schema.org/SoftwareCompany"
      >
        <div className="flex items-center gap-3">
          <img
            src="/pureum-logo.jpg"
            alt="Pureum Software – Toronto Software Development Agency"
            className="w-8 h-8 rounded-full object-cover"
            itemProp="logo"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight" itemProp="name">Pureum Software</span>
            <span className="text-[10px] text-gray-500 tracking-wide" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Toronto</span>, <span itemProp="addressRegion">ON</span> · <span itemProp="addressCountry">Canada</span>
            </span>
          </div>
          <meta itemProp="url" content="https://pureum.dev" />
          <meta itemProp="email" content="info@pureum.dev" />
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="/terms.html" className="hover:text-[#007AFF] transition-colors">
            Terms of Service
          </a>
          <a href="/privacy.html" className="hover:text-[#007AFF] transition-colors">
            Privacy Policy
          </a>
          <a href="mailto:info@pureum.dev" className="hover:text-[#007AFF] transition-colors" itemProp="email">
            Contact Us
          </a>
        </div>

        <p className="text-gray-600 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Pureum Software · Toronto, Canada. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TechStackAndFooter;
