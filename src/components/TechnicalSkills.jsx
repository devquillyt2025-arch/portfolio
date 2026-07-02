import React from 'react';
import { technicalSkills } from '../data/portfolioData';

const TIER_STYLES = {
  Expert: "bg-red-500/20 text-red-300 border-red-500/30",
  Proficient: "bg-white/10 text-white/80 border-white/20",
  Familiar: "bg-white/5 text-white/50 border-white/10",
};

const SkillProgress = ({ name, tier }) => (
  <div className="flex justify-between items-center mb-4 last:mb-0">
    <span className="text-white text-sm font-semibold tracking-wide">{name}</span>
    <span className={`text-[10px] font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${TIER_STYLES[tier] || TIER_STYLES.Familiar}`}>
      {tier}
    </span>
  </div>
);

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500"
  >
    <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-2 border-b border-white/10 uppercase">
      {category.title}
    </h3>
    <div>
      {category.skills.map((skill) => (
        <SkillProgress key={skill.name} name={skill.name} tier={skill.tier} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="scroll-mt-24 bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.
          </p>
        </div>

        {/* Skills Grid — flex-wrap so the 2-card last row centers instead of
            leaving an empty third column */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
