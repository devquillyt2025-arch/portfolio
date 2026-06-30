import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Trained as an electrical engineer, now building AI and data systems — the pivot that shaped how I approach problems.
          </p>
        </div>

        {/* Education Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-2">
                {education.degree}
              </h3>
              <p className="text-red-400 text-sm font-bold font-mono tracking-wider uppercase mb-1">
                {education.institution}
              </p>
              <p className="text-white/40 text-xs font-bold tracking-wide uppercase">
                Graduated {education.graduation}
              </p>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <span className="inline-block bg-[#ff2a2a]/20 text-[#ff2a2a] text-sm font-black tracking-widest uppercase py-2 px-5 rounded-full border border-[#ff2a2a]/30">
                CGPA {education.cgpa}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
