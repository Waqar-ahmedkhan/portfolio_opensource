// components/custom/ProfileSidebar.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  Twitter, Instagram, Mail } from 'lucide-react';

const ProfileSidebar = () => {
  return (
    <div className="w-[350px]  h-full sticky bg-white rounded-3xl border border-zinc-800/50">
      {/* Card with curved dotted line decoration */}
      <div className="relative p-6">
        {/* Dotted curved line decoration */}
        <div className="absolute top-0 right-2">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 20C60 20 100 20 100 60C100 100 60 100 40 100" stroke="#FF6B00" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="100" cy="60" r="8" fill="#FF6B00" />
          </svg>
        </div>

        {/* Profile Image Container */}
        <div className="mb-6 mt-4">
          <div className="rounded-2xl overflow-hidden bg-orange-600 w-full h-64 relative">
            <Image
              src="/profile-image.jpg"
              alt="Aabid Ahmed"
              className="w-full h-full object-cover mix-blend-multiply"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-white mb-6">Aabid Ahmed</h1>

        {/* Fire icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-orange-500 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
          </div>
        </div>

        {/* Bio */}
        <p className="text-zinc-400 text-center mb-8">
          A Software Engineer who has developed countless innovative solutions. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio 
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://dribbble.com" className="text-orange-500 hover:text-orange-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com" className="text-orange-500 hover:text-orange-400 transition-colors">
            <Twitter size={22} />
          </Link>
          <Link href="https://instagram.com" className="text-orange-500 hover:text-orange-400 transition-colors">
            <Instagram size={22} />
          </Link>
          <Link href="mailto:email@example.com" className="text-orange-500 hover:text-orange-400 transition-colors">
            <Mail size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;