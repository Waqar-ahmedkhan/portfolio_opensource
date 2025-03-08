import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="w-full max-w-[95vw] mx-auto lg:w-[350px] h-full lg:sticky bg-white rounded-3xl border border-zinc-800/50 shadow-lg lg:shadow-xl">
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
          <div className="rounded-2xl overflow-hidden h-48 lg:h-72 w-48 lg:w-60 mx-auto">
            <Image
              src="/profile2.png"  
              alt="Waqar Ahmed"
              className="w-full h-full object-cover mix-blend-multiply"
              width={400}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-4 lg:mb-6 text-center">
          Waqar Ahmed
        </h1>

        {/* Fire icon */}
        <div className="flex justify-center mb-3 lg:mb-4">
          <div className="bg-orange-500 p-2 rounded-full">
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
        <p className="text-sm lg:text-base text-zinc-700 font-semibold text-center mb-6 lg:mb-8 px-2 lg:px-0 leading-relaxed">
          Passionate <span className="text-orange-500">Full Stack Developer</span> &{" "}
          <span className="text-orange-500">DevOps Engineer</span>, crafting seamless
          digital experiences. Skilled in designing scalable applications
        </p>

        {/* Social Media & Freelance Icons */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-4 px-2">
          {/* Social Icons */}
          {[
            { href: "https://www.fiverr.com", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <text x="7" y="15" fontSize="10" fontWeight="bold" fill="white">F</text>
              </svg>
            ), color: "text-green-600" },
            { href: "https://www.upwork.com", icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <text x="5" y="15" fontSize="10" fontWeight="bold" fill="white">UP</text>
              </svg>
            ), color: "text-green-500" },
            { href: "https://github.com", icon: <Github size={22} />, color: "text-gray-900" },
            { href: "https://twitter.com", icon: <Twitter size={22} />, color: "text-blue-500" },
            { href: "https://instagram.com", icon: <Instagram size={22} />, color: "text-pink-500" },
            { href: "mailto:email@example.com", icon: <Mail size={22} />, color: "text-orange-500" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className={`${link.color} hover:opacity-80 transition-opacity p-1.5 lg:p-2`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;