"use client";
import React from "react";
import { Cloud, Code, Brain } from "lucide-react";
import { motion } from "framer-motion";

const ProfessionalStats = () => {
  // Stats reflecting full-stack, DevOps, and AI expertise
  const stats = [
    { number: "+3", label: "YEARS OF EXPERIENCE" },
    { number: "+50", label: "FULL-STACK PROJECTS" },
    { number: "+30", label: "AUTOMATED DEPLOYMENTS" },
  ];

  // Skills covering full-stack development, DevOps, and AI
  const skills = [
    {
      title: "FULL-STACK DEVELOPMENT",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "DEVOPS & CLOUD",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "AI & MACHINE LEARNING",
      bgColor: "bg-green-500",
      textColor: "text-white",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  return (
    <div className="lg:w-[80%]">
      {/* Title and Description with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          FULL-STACK
          <br />
          <span className="text-zinc-700">& DEVOPS <span className="">ENGINEEER</span> </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
          Expert in building scalable full-stack applications, automating deployments, and integrating AI solutions. Specialize in cloud infrastructure, containerization, CI/CD pipelines, and machine learning model deployment.
        </p>
      </motion.div>

      {/* Stats Section with Staggered Animation */}
      <div className="flex flex-wrap gap-6 sm:gap-8 mb-12 sm:mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              {stat.number}
            </span>
            <span className="text-xs tracking-wider text-zinc-500 mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Skills Cards with Animation and Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`${skill.bgColor} ${skill.textColor} p-4 sm:p-6 md:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-auto sm:h-56 shadow-lg`}
          >
            <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 opacity-20">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
              >
                <path
                  fill="currentColor"
                  d="M45.7,-48.5C56.8,-35.4,61.5,-17.7,62.4,0.9C63.3,19.5,60.5,39,47.9,53.5C35.4,68,17.7,77.5,1.6,75.9C-14.4,74.3,-28.9,61.6,-43,47.8C-57.1,34,-70.8,19,-73.8,1.7C-76.8,-15.6,-69.2,-31.2,-55.1,-44.3C-41,-57.3,-20.5,-67.8,-1.4,-66.4C17.7,-65,34.5,-61.7,45.7,-48.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold z-10">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalStats;