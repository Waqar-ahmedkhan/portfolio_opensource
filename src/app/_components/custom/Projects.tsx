"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Cine Vista',
      subtitle: 'Free Movies & TV Shows',
      image: '/movie2.jpg',
      color: '#8066cc',
      url: "https://cine-vista-movie-application.vercel.app",
      description: 'Watch Movies & TV Shows Online For Free'
    },
    {
      id: 2,
      title: 'EduAI',
      subtitle: 'AI Education Platform',
      image: '/eduai.png',
      color: '#a673ff',
      url: "https://edu-ai-ym44.vercel.app", // This URL appears incomplete in the original
      description: 'Learn AI & Machine Learning Online'
    },
    {
      id: 3,
      title: 'Meethub',
      subtitle: 'Dashboard for Meethub',
      image: '/dashboard.png',
      color: '#4f46e5',
      url: "https://meethub-ochre.vercel.app",
      description: 'Analytics service for Meethub'
    },
    {
      id: 4,
      title: 'Hotel booking Application',
      subtitle: 'Hotels are available',
      image: '/airbnb.jpg',
      color: '#ff385c',
      url: "https://airbnbclone-mg.netlify.app",
      description: 'Find and book your perfect stay'
    }
  ];

  return (
    <div className="px-6 md:px-16 lg:px-32 text-white font-sans py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 relative text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter">RECENT</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tighter">PROJECTS</h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bg-gradient-to-r from-purple-500 to-indigo-600 h-1 w-24 rounded-full opacity-50 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col md:flex-row items-center group cursor-pointer mx-auto"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={project.url} passHref className="block transform transition-transform duration-500 group-hover:scale-105">
                <div
                  className="relative overflow-hidden rounded-xl w-80 h-72 mx-auto md:mx-0"
                  style={{ 
                    boxShadow: hovered === project.id 
                      ? `0 20px 40px rgba(${project.color === '#ffffff' ? '255, 255, 255' : project.color.replace('#', '').match(/.{2}/g)?.map(c => parseInt(c, 16)).join(', ')}, 0.3)` 
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
                    width={320}
                    height={320}
                    priority
                    quality={90}
                  />
                </div>
              </Link>

              <div className="mt-8 md:ml-12 md:pt-4 flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
                  <Link href={project.url} passHref className="group-hover:no-underline">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                  </Link>
                  <div className={`transition-all duration-500 transform ${hovered === project.id ? 'opacity-100 translate-x-2 -translate-y-1' : 'opacity-0'}`}>
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-500 mt-2 tracking-wide">{project.subtitle}</p>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto md:mx-0">{project.description}</p>
                
                <div className={`mt-6 transition-all duration-500 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Link href={project.url} passHref>
                    <button className="text-sm bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105">
                      View Project
                    </button>
                  </Link>
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