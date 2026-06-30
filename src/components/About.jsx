import React from 'react';
import stackImage from '../assets/about/jeevith-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.4 6.2c-31.7 0-29.7 13.7-29.7 13.7l.1 14.2h30.2v4.3H21.6S6.2 36.6 6.2 64.5s13.4 27 13.4 27h8v-16.6s-.4-13.4 13.2-13.4h29.9s12.7.2 12.7-12.3V19.1S85.3 6.2 63.4 6.2zM48.4 14.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2z"/>
      <path fill="#FFD43B" d="M64.6 121.8c31.7 0 29.7-13.7 29.7-13.7l-.1-14.2H64v-4.3h42.4s15.4 1.8 15.4-26.1-13.4-27-13.4-27h-8v16.6s.4 13.4-13.2 13.4H57.3s-12.7-.2-12.7 12.3v20.9s-1.9 21.9 19.9 21.9zm15-8.2a4.6 4.6 0 110-9.2 4.6 4.6 0 010 9.2z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const AWSIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF9900" d="M36 60c0 9.5 7.7 17.2 17.2 17.2 6.3 0 11.8-3.4 14.8-8.5l-7-4c-1.5 2.6-4.3 4.3-7.5 4.3-4.8 0-8.7-3.9-8.7-8.7v-.3h25.4v-7.6H36V60z"/>
      <path fill="#FF9900" d="M53.2 35.3c-9.5 0-17.2 7.7-17.2 17.2h8.5c0-4.8 3.9-8.7 8.7-8.7 3.2 0 6 1.7 7.5 4.3l7-4c-3-5.1-8.5-8.8-14.5-8.8z"/>
      <path fill="#FF9900" d="M86 35.3l-9 25.7-9-25.7h-7.9l13 35.9h7.8l13-35.9z"/>
      <path fill="#FF9900" d="M22 92.5c14.6 9.3 41.7 18.6 65 8.8 1.4-.6 2.5.9 1.2 1.9-12.7 9.6-39.5 17.5-65.9 5.4-1.6-.7-.9-2.6-.3-2-.1-.1.1-.1 0-.1z" opacity="0.9"/>
      <path fill="#FF9900" d="M97.6 89.6c-1-1.2-6.4-.6-8.9-.3-.7.1-.8-.6-.2-1 4.4-3.1 11.5-2.2 12.4-1.2.9 1.1-.2 8.3-4.3 11.8-.6.5-1.2.2-.9-.5.9-2.3 2.9-7.6 1.9-8.8z" opacity="0.9"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AWS</span>
  </div>
);

const GenAIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#ff2a2a" d="M64 16l8.5 26.5L99 51l-26.5 8.5L64 86l-8.5-26.5L29 51l26.5-8.5z"/>
      <path fill="#ffffff" d="M98 78l4.2 13L115 95.2 102.2 99.4 98 112.4 93.8 99.4 81 95.2 93.8 91z" opacity="0.85"/>
      <path fill="#ffffff" d="M24 78l3.4 10.6L38 92l-10.6 3.4L24 106l-3.4-10.6L10 92l10.6-3.4z" opacity="0.6"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Generative AI</span>
  </div>
);

const TECH_ICONS = {
  Python: PythonIcon,
  AWS: AWSIcon,
  "Generative AI": GenAIIcon,
};

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Jeevith R — AI Engineer & Full-Stack Product Builder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            {aboutContent.techStack.map((tech, i) => {
              const Icon = TECH_ICONS[tech];
              if (!Icon) return null;
              return (
                <div key={tech} data-aos="zoom-in" data-aos-delay={300 + i * 150} className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
                  <Icon />
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
