"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiGraphql,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiTensorflow,
  SiPrisma,
  SiKubernetes,
  SiGithubactions,
  SiScikitlearn,
  SiPytorch,
  SiVercel,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaBrain, FaFilter } from "react-icons/fa";

type CategoryType = "frontend" | "backend" | "devops" | "ai" | "all";

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  category: Exclude<CategoryType, "all">;
  index: number;
}

const ToolCard = ({
  icon,
  name,
  description,
  category,
  index,
}: ToolCardProps) => {
  const getCategoryColor = () => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-sky-600";
      case "backend":
        return "from-green-500 to-emerald-600";
      case "devops":
        return "from-yellow-500 to-amber-600";
      case "ai":
        return "from-rose-500 to-pink-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-zinc-800 hover:border-zinc-600 shadow-lg shadow-black/5 transition-all flex items-center gap-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor()} flex items-center justify-center text-white shadow-md`}
      >
        <div className="text-2xl">{icon}</div>
      </motion.div>
      <div>
        <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
          {name}
        </h3>
        <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const CategoryHeading = ({
  title,
  icon,
  onClick,
  isActive,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
      isActive
        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
        : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/70 hover:text-zinc-200"
    }`}
  >
    <div className={`text-xl ${isActive ? "text-white" : "text-orange-500"}`}>
      {icon}
    </div>
    <h3 className="font-semibold">{title}</h3>
  </motion.button>
);

const ToolsGrid = ({
  tools,
  selectedCategory,
}: {
  tools: Array<{
    icon: React.ReactNode;
    name: string;
    description: string;
    category: Exclude<CategoryType, "all">;
  }>;
  selectedCategory: CategoryType;
}) => {
  const filteredTools =
    selectedCategory === "all"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8"
      >
        {filteredTools.map((tool, index) => (
          <ToolCard
            key={`${tool.category}-${tool.name}`}
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
            category={tool.category}
            index={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const DeveloperTools = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { id: "all", title: "All Tools", icon: <SiReact /> },
    { id: "frontend", title: "Frontend", icon: <SiReact /> },
    { id: "backend", title: "Backend", icon: <SiNodedotjs /> },
    { id: "devops", title: "DevOps", icon: <SiDocker /> },
    { id: "ai", title: "AI & ML", icon: <FaBrain /> },
  ];

  const tools: Array<{
    icon: React.ReactNode;
    name: string;
    description: string;
    category: Exclude<CategoryType, "all">;
  }> = [
    // Frontend Tools
    {
      icon: <SiReact />,
      name: "React",
      description: "Frontend UI Library",
      category: "frontend",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      description: "React Framework",
      category: "frontend",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "Utility-first CSS",
      category: "frontend",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      description: "Typed JavaScript",
      category: "frontend",
    },
    // Backend Tools
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
      description: "JavaScript Runtime",
      category: "backend",
    },
    {
      icon: <SiExpress />,
      name: "Express",
      description: "Node.js Framework",
      category: "backend",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
      description: "API Query Language",
      category: "backend",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
      description: "ORM for Node.js",
      category: "backend",
    },
    // DevOps Tools
    {
      icon: <SiDocker />,
      name: "Docker",
      description: "Containerization",
      category: "devops",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
      description: "Container Orchestration",
      category: "devops",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
      description: "Deployment Platform",
      category: "devops",
    },
    {
      icon: <SiGithubactions />,
      name: "GitHub Actions",
      description: "CI/CD",
      category: "devops",
    },
    // AI & ML Tools
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
      description: "ML Framework",
      category: "ai",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
      description: "ML Framework",
      category: "ai",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-learn",
      description: "ML Library",
      category: "ai",
    },
    {
      icon: <TbBrandOpenai />,
      name: "LangChain",
      description: "LLM Framework",
      category: "ai",
    },
  ];

  if (!isMounted) {
    return (
      <div className="lg:ml-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-16 relative">
        <div className="h-96 flex items-center justify-center">
          {/* Optional loading indicator */}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:ml-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-16 relative">
      {/* Responsive background effects */}
      <div className="absolute top-0 right-0 -z-10">
        <div
          className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute top-40 right-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-12"
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
        >
          PREMIUM
        </motion.h2>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-700 mb-4"
        >
          TOOLS
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-400 max-w-2xl text-sm sm:text-base"
        >
          Showcasing my top skills in full-stack development, DevOps, and AI
          with these powerful tools.
        </motion.p>
      </motion.div>

      {/* Mobile filter toggle */}
      {isMobile && (
        <div className="flex justify-center mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-expanded={isFilterOpen}
            className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <FaFilter />
            <span>Filter Tools</span>
          </motion.button>
        </div>
      )}

      {/* Categories filter */}
      <AnimatePresence>
        {(!isMobile || isFilterOpen) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3 mb-8 justify-center"
          >
            {categories.map((category) => (
              <CategoryHeading
                key={category.id}
                title={category.title}
                icon={category.icon}
                isActive={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id as CategoryType)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ToolsGrid tools={tools} selectedCategory={selectedCategory} />
    </div>
  );
};

export default DeveloperTools;
