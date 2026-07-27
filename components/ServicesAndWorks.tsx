'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import SignupModal from './SignupModal';

const ServicesAndWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#050505] py-16 px-4 sm:px-6 md:px-12 lg:px-16 scroll-mt-20" id="services">
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Main White Card Container (Matching Reference Design) */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-14 text-gray-900 shadow-2xl">
        
        {/* TOP SECTION: 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-16 border-b border-gray-200/80">
          
          {/* Column 1: Services List (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
                Services
              </span>
              <ul className="space-y-3 text-sm md:text-base font-medium text-gray-800">
                <li className="flex items-center gap-2 font-semibold text-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]"></span>
                  SEO & GEO
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  Web Application & Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  iOS & Android App
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  Cloud Infrastructure
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  AI & Workflow Automation
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Full Stack Dev Description (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-4 border-t lg:border-t-0 border-gray-100 pt-6 lg:pt-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Specialties
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Full Stack Development
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                End-to-end digital engineering. From robust cloud backends to responsive, pixel-perfect frontend applications, we build fast, scalable, and secure systems tailored for growth.
              </p>
            </div>
            <a
              href="mailto:info@pureum.dev"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 w-fit shadow-md hover:shadow-lg"
            >
              Explore Capabilities
              <Icon icon="solar:arrow-right-linear" className="text-base" />
            </a>
          </div>

          {/* Column 3: Dark Featured Banner (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#0F1115] text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#007AFF]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#007AFF]/30 transition-all"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                Let's Build Extraordinary Software Together!
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light mb-8">
                We partner with visionaries and forward-thinking businesses to turn complex ideas into seamless digital experiences. Elevate your presence today.
              </p>
            </div>

            <div className="relative z-10">
              <a
                href="mailto:info@pureum.dev"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                Start a Project
                <Icon icon="solar:arrow-right-linear" className="text-base text-[#007AFF]" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: My Works (5 Columns x 2 Rows Grid = 10 Projects) */}
        <div className="pt-10 md:pt-14 scroll-mt-24" id="my-works">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                My Works
              </h2>
              <span className="bg-blue-50 text-[#007AFF] text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                10 Selected Projects
              </span>
            </div>
            <a
              href="mailto:info@pureum.dev"
              className="text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-black transition-colors flex items-center gap-2"
            >
              Request Custom Build
              <Icon icon="solar:arrow-right-linear" className="text-base" />
            </a>
          </div>

          {/* Cards Grid - 5 Columns Layout (5x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

            {/* Card 1: Bristol Circle Dental */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:chart-2-bold-duotone" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    SEO & GEO
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 bg-emerald-950/60 backdrop-blur-md px-2 py-0.5 rounded-lg text-[10px] font-bold text-emerald-200 flex items-center gap-1">
                    <Icon icon="solar:graph-up-bold" className="text-emerald-400 text-xs" />
                    Rank 130 → 5th
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  Bristol Circle Dental
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  SEO & GEO dental site. Boosted rank from #130 to Top 5–15.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href="https://bristolcircledental.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-800 hover:text-emerald-600 flex items-center gap-1 transition-colors"
                >
                  Visit Site
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </a>
                <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                  Live Success
                </span>
              </div>
            </div>

            {/* Card 2: Retirement Calculator Plus */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#3730A3] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:calculator-minimalistic-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    iOS App
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  Retirement Calc Plus
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  iOS app for smart retirement planning & compound growth.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-gray-800 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                >
                  Learn More
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </button>
                <span className="text-[9px] text-indigo-700 font-semibold bg-indigo-100 px-1.5 py-0.5 rounded">
                  Fintech iOS
                </span>
              </div>
            </div>

            {/* Card 3: MoneyPilot */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0369A1] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:file-left-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    iOS App
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                  MoneyPilot
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  iOS expense app parsing CSV files to auto-budget.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href="/moneypilot/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-800 hover:text-sky-600 flex items-center gap-1 transition-colors"
                >
                  View Demo
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </a>
                <span className="text-[9px] text-sky-700 font-semibold bg-sky-100 px-1.5 py-0.5 rounded">
                  CSV Budget
                </span>
              </div>
            </div>

            {/* Card 4: PlantLog */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:leaf-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    iOS Utility
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  PlantLog
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  iOS plant care app with smart push notifications.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-gray-800 hover:text-emerald-600 flex items-center gap-1 transition-colors"
                >
                  Learn More
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </button>
                <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                  iOS Push
                </span>
              </div>
            </div>

            {/* Card 5: AI Receptionist */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:user-speak-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    AI Automation
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">
                  AI Receptionist
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Voice & chat AI receptionist for 24/7 patient booking.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-gray-800 hover:text-violet-600 flex items-center gap-1 transition-colors"
                >
                  Request Demo
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </button>
                <span className="text-[9px] text-violet-700 font-semibold bg-violet-100 px-1.5 py-0.5 rounded">
                  AI Voice
                </span>
              </div>
            </div>

            {/* ROW 2 */}

            {/* Card 6: PathLog */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#1A5DFF] to-[#0A3BB3] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:map-point-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    iOS App
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#007AFF] transition-colors">
                  PathLog
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Plan trips with AI & interactive map KML route editor.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href="/pathlog/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-800 hover:text-[#007AFF] flex items-center gap-1 transition-colors"
                >
                  View Work
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </a>
                <a
                  href="https://apps.apple.com/ca/app/pathlog/id6764615274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                  title="App Store"
                >
                  <Icon icon="solar:smartphone-bold" className="text-base" />
                </a>
              </div>
            </div>

            {/* Card 7: Doctor Note */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#5236AA] to-[#341F7B] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:document-medicine-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    AI Clinical
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#5236AA] transition-colors">
                  Doctor Note
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Automated clinical medical documentation & notes.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-gray-800 hover:text-[#5236AA] flex items-center gap-1 transition-colors"
                >
                  Try Demo
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </button>
                <span className="text-[9px] text-purple-600 font-semibold bg-purple-100 px-1.5 py-0.5 rounded">
                  Live Preview
                </span>
              </div>
            </div>

            {/* Card 8: OptiPay */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:card-2-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    Fintech
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  OptiPay
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Business payments and financial tracking & analytics.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href="/optipay/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  View Work
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </a>
                <span className="text-[9px] text-blue-600 font-semibold bg-blue-100 px-1.5 py-0.5 rounded">
                  Web & Mobile
                </span>
              </div>
            </div>

            {/* Card 9: PureStock */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#8DBD32] to-[#5C8518] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:clipboard-list-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    Dental Tech
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#5C8518] transition-colors">
                  PureStock
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Dental clinic inventory system for stock levels.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href="/inventory/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gray-800 hover:text-[#5C8518] flex items-center gap-1 transition-colors"
                >
                  View Work
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </a>
                <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                  iOS Ready
                </span>
              </div>
            </div>

            {/* Card 10: SEO Rank Monitor */}
            <div className="group bg-[#F4F6FB] border border-gray-200/60 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] overflow-hidden mb-4 flex items-center justify-center shadow-md">
                  <Icon icon="solar:magnifer-bug-bold" className="text-5xl text-white group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2.5 right-2.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                    SEO Tool
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                  SEO Rank Monitor
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 font-normal">
                  Real-time Google search ranking & local GEO keyword tracking.
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-200/60 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-gray-800 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  Learn More
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </button>
                <span className="text-[9px] text-amber-700 font-semibold bg-amber-100 px-1.5 py-0.5 rounded">
                  Analytics
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesAndWorks;
