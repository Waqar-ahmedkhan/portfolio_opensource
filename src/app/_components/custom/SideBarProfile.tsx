import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="w-full lg:w-[350px] h-full sticky bg-white rounded-3xl border border-zinc-800/50 shadow-lg">
      {/* Card with curved dotted line decoration */}
      <div className="relative p-6">
        {/* Dotted curved line decoration */}
        <div className="absolute top-0 right-2">
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
        <div className="mb-6 mt-4">
          <div className="rounded-2xl overflow-hidden bg-orange-600 w-full h-64 relative">
            <Image
              src="/profile-image.jpg"
              alt="Waqar Ahmed"
              className="w-full h-full object-cover mix-blend-multiply"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-zinc-900 mb-6 text-center">
          Aabid Ahmed
        </h1>

        {/* Fire icon */}
        <div className="flex justify-center mb-4">
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
        <p className="text-zinc-700 font-semibold text-center mb-8">
          Passionate <span className="text-orange-500">Full Stack Developer</span> &{" "}
          <span className="text-orange-500">DevOps Engineer</span>, crafting seamless
          digital experiences. Skilled in designing scalable applications, cloud
          automation, and optimizing CI/CD workflows for peak performance.
        </p>

        {/* Social Media & Freelance Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* Fiverr */}
          <Link
            href="https://www.fiverr.com"
            target="_blank"
            className="text-green-600 hover:text-green-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <text x="7" y="15" fontSize="10" fontWeight="bold" fill="white">F</text>
            </svg>
          </Link>

          {/* Upwork */}
          <Link
            href="https://www.upwork.com"
            target="_blank"
            className="text-green-500 hover:text-green-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <text x="5" y="15" fontSize="10" fontWeight="bold" fill="white">UP</text>
            </svg>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-900 hover:text-gray-700 transition-colors"
          >
            <Github size={22} />
          </Link>

          {/* Twitter */}
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            <Twitter size={22} />
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-pink-500 hover:text-pink-400 transition-colors"
          >
            <Instagram size={22} />
          </Link>

          {/* Mail */}
          <Link
            href="mailto:email@example.com"
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            <Mail size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;