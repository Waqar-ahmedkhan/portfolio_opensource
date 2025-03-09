"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featuredImage: string;
  content: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
    role?: string;
  };
}

const EnhancedArticleReader: React.FC<{ article: Article }> = ({ article }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  // Enhanced paragraph processing with better heading detection and formatting
  const processContent = () => {
    const rawParagraphs = article.content
      .split("\n\n")
      .filter((p: string) => p.trim() !== "");
    
    // Process headings for table of contents
    const headings = rawParagraphs
      .filter((p) => p.startsWith("# ") || p.startsWith("## "))
      .map((heading) => {
        const isMainHeading = heading.startsWith("# ");
        const title = isMainHeading ? heading.substring(2) : heading.substring(3);
        const id = title.toLowerCase().replace(/[^\w]+/g, "-");
        return { title, id, level: isMainHeading ? 1 : 2 };
      });
    
    return { paragraphs: rawParagraphs, headings };
  };

  const { paragraphs, headings } = processContent();

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        // Update reading progress
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(progress, 100));

        // Update active heading
        const headingElements = contentRef.current.querySelectorAll("h1, h2");
        for (let i = headingElements.length - 1; i >= 0; i--) {
          const element = headingElements[i];
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100) {
            setActiveHeading(element.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estimate reading time based on content length
  const estimatedTimeRemaining = () => {
    const wordsPerMinute = 200;
    const remainingWords =
      article.content.split(" ").length * (1 - readingProgress / 100);

    const minutes = Math.ceil(remainingWords / wordsPerMinute);
    return minutes <= 1 ? "Less than 1 min left" : `~${minutes} mins left`;
  };

  return (
    <div className="text-gray-100 lg:ml-32 max-w-screen-xl mx-auto relative">
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
          style={{ width: `${readingProgress}%` }}
          layoutId="progressBar"
        />
      </motion.div>

      {/* Main content container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-orange-400 rounded-full bg-orange-500/10 backdrop-blur-sm">
            {article.tags?.[0] || "Article"}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-100 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">{article.excerpt}</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span>{article.readTime}</span>
          </div>
        </motion.div>

        {/* Featured image with parallax effect */}
        <motion.div
          className="mb-10 rounded-xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Main article content */}
          <motion.div
            ref={contentRef}
            className="lg:col-span-8 lg:col-start-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="prose max-w-none prose-lg prose-invert lg:pr-8">
              {paragraphs.map((paragraph: string, idx: number) => {
                if (paragraph.startsWith("# ")) {
                  const title = paragraph.substring(2);
                  const id = title.toLowerCase().replace(/[^\w]+/g, "-");
                  return (
                    <h1
                      key={idx}
                      id={id}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-16 mb-8 text-gray-100 scroll-mt-24 pb-2 border-b border-orange-500/30"
                    >
                      <span className="text-orange-400">#</span> {title}
                    </h1>
                  );
                } else if (paragraph.startsWith("## ")) {
                  const title = paragraph.substring(3);
                  const id = title.toLowerCase().replace(/[^\w]+/g, "-");
                  return (
                    <h2
                      key={idx}
                      id={id}
                      className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-12 mb-6 text-gray-100 scroll-mt-24 flex items-center"
                    >
                      <span className="text-orange-400 text-lg mr-2">§</span>
                      {title}
                    </h2>
                  );
                } else if (paragraph.startsWith("1. ")) {
                  const listItems = paragraph
                    .split("\n")
                    .filter((item) => item.match(/^\d+\. /));
                  return (
                    <ol
                      key={idx}
                      className="list-decimal pl-5 mb-8 space-y-3 text-gray-300"
                    >
                      {listItems.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-base sm:text-lg lg:text-xl"
                        >
                          {item.replace(/^\d+\. /, "")}
                        </li>
                      ))}
                    </ol>
                  );
                } else if (paragraph.startsWith("- ")) {
                  const listItems = paragraph
                    .split("\n")
                    .filter((item) => item.startsWith("- "));
                  return (
                    <ul
                      key={idx}
                      className="list-disc pl-5 mb-8 space-y-3 text-gray-300"
                    >
                      {listItems.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-base sm:text-lg lg:text-xl"
                        >
                          {item.substring(2)}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.startsWith("```")) {
                  const code = paragraph
                    .replace(/```([\w]*)\n/, "")
                    .replace(/```$/, "");
                  return (
                    <div key={idx} className="mb-8 rounded-lg overflow-hidden">
                      <pre className="bg-gray-800/70 p-4 overflow-x-auto text-sm lg:text-base text-gray-300">
                        <code>{code}</code>
                      </pre>
                    </div>
                  );
                } else if (paragraph.startsWith("> ")) {
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-orange-500 pl-4 italic mb-8 text-base sm:text-lg lg:text-xl text-gray-300"
                    >
                      {paragraph.substring(2)}
                    </blockquote>
                  );
                } else {
                  return (
                    <p
                      key={idx}
                      className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 text-gray-300"
                    >
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Article footer */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author bio */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  {article.author?.avatar ? (
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="font-bold text-xl text-white">
                      {article.author?.name?.charAt(0) || "W"}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-100">
                    {article.author?.name || "Waqar Ahmed"}
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    {article.author?.role || "Software Engineer"}
                  </p>
                  <p className="text-sm text-gray-300">
                    Thank you for reading! If you enjoyed this article, feel
                    free to share it with others.
                  </p>
                </div>
              </div>

              {/* Contact form */}
            </div>
          </motion.div>

          {/* Sidebar - Fixed on desktop, bottom sheet on mobile */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Reading stats card */}
              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <h3 className="font-semibold text-lg mb-5 text-gray-100">
                  Reading Stats
                </h3>

                {/* Author info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-sm text-white">
                      {article.author?.name?.charAt(0) || "W"}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-100">
                      {article.author?.name || "Waqar Ahmed"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {article.author?.role || "Software Engineer"}
                    </p>
                  </div>
                </div>

                {/* Article info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-400">Published</p>
                    <p className="font-medium text-sm text-gray-100">
                      {article.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Reading time</p>
                    <p className="font-medium text-sm text-gray-100">
                      {article.readTime}
                    </p>
                  </div>
                </div>

                {/* Reading progress */}
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-xs text-gray-400">Your progress</p>
                    <p className="text-xs font-medium text-orange-400">
                      {estimatedTimeRemaining()}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                  <p className="text-xs text-right mt-1 text-gray-400">
                    {Math.round(readingProgress)}% complete
                  </p>
                </div>
              </div>

              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="font-semibold text-lg mb-4 text-gray-100">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {headings.map((heading, idx) => (
                      <button
                        key={idx}
                        className={`block text-left w-full py-2 px-3 rounded-lg transition-colors duration-200 ${
                          activeHeading === heading.id
                            ? "bg-orange-500/20 text-orange-400"
                            : "hover:bg-gray-700/50 text-gray-300"
                        } ${
                          heading.level === 2
                            ? "pl-6 text-sm"
                            : "text-base font-medium"
                        }`}
                        onClick={() => {
                          document
                            .getElementById(heading.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setActiveHeading(heading.id);
                        }}
                      >
                        {heading.level === 1 ? (
                          <span className="flex items-center">
                            <span className="text-orange-400 mr-2 text-xs">#</span>
                            {heading.title}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <span className="text-orange-400 mr-2 text-xs">§</span>
                            {heading.title}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share card */}
              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <h3 className="font-semibold text-lg mb-4 text-gray-100">
                  Share this article
                </h3>
                <div className="flex space-x-2">
                  <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="p-3 bg-blue-800 rounded-full hover:bg-blue-900 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                  <button className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266c-1.203.267-1.531.057-1.922-.522-.24-.354-.4-.745-.969-.745-.594 0-.815.42-.815.84 0 .952 1.097 1.472 1.97 1.472 2.063 0 3.396-1.126 3.396-3.356 0-1.266-.605-2.413-1.76-3.167-1.157-.757-2.438-.952-3.839-.952-2.597 0-4.937 1.23-4.937 4.159 0 2.262 1.901 3.694 3.921 3.694 1.771 0 3.131-.689 3.766-1.585.306.257.664.416 1.035.416.958 0 1.65-.897 1.65-1.826 0-.476-.223-.793-.457-.992-.412-.354-.831-.619-1.254-.865-.396-.227-.753-.45-.968-.636-.35-.301-.526-.537-.526-.863 0-.19.086-.344.268-.445.193-.107.407-.175.648-.223.919-.188 1.826-.296 2.836-.38.591-.049 1.019-.48 1.019-1.039 0-.593-.47-1.084-1.062-1.084-.187 0-.348.034-.511.102-.897.379-1.95.648-2.947.75-.586.06-1.061.49-1.061 1.079 0 .592.455 1.085 1.05 1.085.177 0 .362-.034.524-.09.842-.309 1.781-.519 2.796-.519.827 0 1.361.248 1.361.848 0 .309-.138.564-.405.744-.195.132-.613.308-1.153.505-.701.255-1.597.581-2.188.961-.955.613-1.559 1.504-1.559 2.525 0 1.464 1.155 2.91 3.03 2.91.984 0 1.886-.265 2.674-.764.476-.304 1.095-.456 1.712-.341.426.08.852-.033 1.186-.313.333-.28.536-.664.536-1.089-.001-.404-.163-.76-.429-1.009z" />
                    </svg>
                  </button>
                  <button
                    className="relative p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>

                    {/* Share dropdown */}
                    {isShareMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          <span className="mr-2">📧</span> Email
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          <span className="mr-2">📋</span> Copy link
                        </button>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile progress bar - only visible on very small screens */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-md border-t border-gray-800 z-40 lg:hidden">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-400">Reading progress</p>
          <p className="text-xs font-medium text-orange-400">
            {estimatedTimeRemaining()}
          </p>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EnhancedArticleReader;