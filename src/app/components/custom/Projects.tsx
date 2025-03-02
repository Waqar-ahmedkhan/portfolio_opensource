"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Revo',
      subtitle: 'Free Framer Template',
      image: '/api/placeholder/220/220',
      color: '#8066cc',
      description: 'Revolutionize Your Content Creation Process'
    },
    {
      id: 2,
      title: 'NajmAI',
      subtitle: 'SaaS Framer Template',
      image: '/api/placeholder/220/220',
      color: '#a673ff',
      description: 'Your AI Power of 2023'
    },
    {
      id: 3,
      title: 'Nashra',
      subtitle: 'SaaS Framer Template',
      image: '/api/placeholder/220/220',
      color: '#ffffff',
      description: 'Enhance The Way You Email Newsletters'
    }
  ];

  return (
    <div className="px-32  text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 relative">
          <h1 className="text-7xl font-bold mb-2 tracking-tighter">RECENT</h1>
          <h2 className="text-7xl font-bold text-gray-800 tracking-tighter">PROJECTS</h2>
          <div className="absolute -right-4 top-4 bg-gradient-to-r from-purple-500 to-indigo-600 h-1 w-24 rounded-full opacity-50"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex items-start group cursor-pointer"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative overflow-hidden rounded-xl w-72 h-64 transition-all duration-500 transform group-hover:scale-105"
                style={{ 
                  boxShadow: hovered === project.id 
                    ? `0 10px 30px rgba(${project.color === '#ffffff' ? '255, 255, 255' : '166, 115, 255'}, 0.3)` 
                    : 'none'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-xl transition-opacity duration-500" 
                  style={{ 
                    backgroundColor: project.color, 
                    opacity: hovered === project.id ? 0.2 : 0.1
                  }}
                ></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl border border-gray-800"
                  width={220}
                  height={220}
                />
              </div>

              <div className="ml-10 pt-4 flex-1">
                <div className="flex items-center gap-4">
                  <h3 className="text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className={`transition-all duration-500 transform ${hovered === project.id ? 'opacity-100 translate-x-2 -translate-y-1' : 'opacity-0'}`}>
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-xl text-gray-500 mt-2 tracking-wide">{project.subtitle}</p>
                <p className="text-gray-400 mt-4 max-w-xl">{project.description}</p>
                
                <div className={`mt-6 transition-all duration-500 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="text-sm bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;