// components/custom/ProfessionalStats.tsx
"use client"
import React from 'react';

const ProfessionalStats = () => {
  const stats = [
    { number: "+12", label: "YEARS OF EXPERIENCE" },
    { number: "+46", label: "PROJECTS COMPLETED" },
    { number: "+20", label: "WORLDWIDE CLIENTS" }
  ];
  
  const skills = [
    {
      title: "DYNAMIC ANIMATION",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 20h.01"></path>
          <path d="M7 20v-4"></path>
          <path d="M12 20v-8"></path>
          <path d="M17 20v-6"></path>
          <path d="M22 20v-8"></path>
        </svg>
      )
    },
    {
      title: "FRAMER, FIGMA, DESIGN SYSTEMS",
      bgColor: "bg-lime-400",
      textColor: "text-black",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M9 3v18"></path>
          <path d="M14 8h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-3xl">
      {/* Title and Description */}
      <div className="mb-16">
        <h1 className="text-6xl font-bold text-white mb-4">
          SOFTWARE
          <br />
          <span className="text-zinc-700">ENGINEER</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-6xl font-bold text-white">{stat.number}</span>
            <span className="text-xs tracking-wider text-zinc-500 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`${skill.bgColor} ${skill.textColor} p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-56`}
          >
            <div className="absolute right-4 bottom-4 opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
                <path fill="currentColor" d="M45.7,-48.5C56.8,-35.4,61.5,-17.7,62.4,0.9C63.3,19.5,60.5,39,47.9,53.5C35.4,68,17.7,77.5,1.6,75.9C-14.4,74.3,-28.9,61.6,-43,47.8C-57.1,34,-70.8,19,-73.8,1.7C-76.8,-15.6,-69.2,-31.2,-55.1,-44.3C-41,-57.3,-20.5,-67.8,-1.4,-66.4C17.7,-65,34.5,-61.7,45.7,-48.5Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold z-10">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalStats;