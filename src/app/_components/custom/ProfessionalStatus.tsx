"use client";
import React from "react";
import { Cloud, Code, Brain } from "lucide-react";
import { motion} from "framer-motion";

const ProfessionalStats = () => {
  const stats = [
    { number: "+3", label: "YEARS OF EXPERIENCE" },
    { number: "+50", label: "FULL-STACK PROJECTS" },
    { number: "+30", label: "AUTOMATED DEPLOYMENTS" },
  ];

  const skills = [
    {
      title: "FULL-STACK DEVELOPMENT",
      bgColor: "bg-purple-500",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "DEVOPS & CLOUD",
      bgColor: "bg-blue-500",
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "AI & MACHINE LEARNING",
      bgColor: "bg-green-500",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="lg:w-[80%] space-y-12 sm:space-y-16">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
          FULL-STACK
          <br />
          <span className="text-zinc-700">& DEVOPS <span className="text-white">ENGINEER</span></span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Expert in building scalable full-stack applications, automating deployments, and integrating AI solutions. 
          Specialize in cloud infrastructure, containerization, CI/CD pipelines, and machine learning model deployment.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="flex flex-wrap gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={childVariants}
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
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${skill.bgColor} text-white p-6 sm:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-48 sm:h-56 shadow-xl transition-shadow hover:shadow-2xl`}
          >
            <BlobBackground />
            <div className="mb-4 z-10">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold z-10">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Reusable Blob Background Component
const BlobBackground = () => (
  <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 opacity-20">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 sm:w-32 sm:h-32"
    >
      <path
        fill="currentColor"
        d="M45.7,-48.5C56.8,-35.4,61.5,-17.7,62.4,0.9C63.3,19.5,60.5,39,47.9,53.5C35.4,68,17.7,77.5,1.6,75.9C-14.4,74.3,-28.9,61.6,-43,47.8C-57.1,34,-70.8,19,-73.8,1.7C-76.8,-15.6,-69.2,-31.2,-55.1,-44.3C-41,-57.3,-20.5,-67.8,-1.4,-66.4C17.7,-65,34.5,-61.7,45.7,-48.5Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
);

export default ProfessionalStats;