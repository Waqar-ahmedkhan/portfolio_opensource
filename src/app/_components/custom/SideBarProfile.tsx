import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="w-full max-w-[95vw] mx-auto lg:w-[350px] lg:sticky  bg-white rounded-3xl border border-zinc-800/50 shadow-lg lg:shadow-xl">
      {/* Card with curved dotted line decoration */}
      <div className="relative p-4 sm:p-6">
        {/* Dotted curved line decoration - Hidden on mobile */}
        <div className="absolute top-0 right-2 hidden lg:block">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 20C60 20 100 20 100 60C100 100 60 100 40 100"
              stroke="#FF6B00"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="100" cy="60" r="8" fill="#FF6B00" />
          </svg>
        </div>

        {/* Profile Image Container */}
        <div className="mb-4 lg:mb-6 mt-2 lg:mt-4">
          <div className="relative rounded-2xl overflow-hidden h-48 lg:h-72 w-48 lg:w-60 mx-auto group">
            <Image
              src="/profile2.png"  
              alt="Waqar Ahmed"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              width={400}
              height={500}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-2 lg:mb-3 text-center">
          Waqar Ahmed
        </h1>
         {/* Title */}
         <p className="text-sm text-orange-500 font-bold text-center mb-2 lg:mb-3">
          Full Stack Developer & DevOps Engineer
        </p>

        {/* Fire icon */}
        <div className="flex  justify-center mb-3 lg:mb-4">
          <div className="bg-orange-500 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm lg:text-base text-zinc-700 mb-4 lg:mb-8 px-2 lg:px-2 leading-relaxed text-center">
          Building scalable, cloud-powered solutions with a passion for innovation.
        </p>

        {/* Social Media Icons - Only LinkedIn, GitHub and Mail */}
        <div className="flex flex-wrap justify-center gap-4 px-2">
          {/* Professional Social Icons */}
          {[
            { href: "https://linkedin.com/in/waqarahmed", icon: <Linkedin size={22} />, color: "text-blue-600", tooltip: "LinkedIn" },
            { href: "https://github.com/waqarahmed", icon: <Github size={22} />, color: "text-gray-900", tooltip: "GitHub" },
            { href: "mailto:contact@waqarahmed.dev", icon: <Mail size={22} />, color: "text-orange-500", tooltip: "Email" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className={`${link.color} hover:opacity-80 transition-all p-2 hover:bg-gray-100 rounded-full relative group`}
              aria-label={link.tooltip}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {link.tooltip}
              </span>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;