// app/components/custom/ArticleReader.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contactus from "./Contactus";
import { ChevronLeft, Share2, Bookmark, BookmarkCheck, Moon, Sun } from 'lucide-react';

// Type definition for Article
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featuredImage: string;
  content: string;
}

const ArticleReader: React.FC<{ article: Article }> = ({ article }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [estimatedReadTime] = useState(article.readTime);
  
  // Parse content
  const paragraphs = article.content
    .split('\n\n')
    .filter((p: string) => p.trim() !== '');
  
  // Handle scroll for reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Share article
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-orange-500 transition-all duration-200"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      {/* Header with back button and actions */}
      <div className={`sticky top-0 z-40 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm py-4 px-4 sm:px-6 flex justify-between items-center`}>
        <Link 
          href="/thoughts"
          className="text-orange-500 hover:text-orange-400 transition-colors flex items-center group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Articles</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-800/20 transition-colors">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsBookmarked(!isBookmarked)} className="p-2 rounded-full hover:bg-gray-800/20 transition-colors">
            {isBookmarked ? <BookmarkCheck className="w-5 h-5 text-orange-500" /> : <Bookmark className="w-5 h-5" />}
          </button>
          <button onClick={shareArticle} className="p-2 rounded-full hover:bg-gray-800/20 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Featured image */}
        <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            width={1200}
            height={630}
            className="w-full object-cover aspect-video transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
              {paragraphs.map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-2xl sm:text-3xl font-bold mb-6 mt-8">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-xl sm:text-2xl font-semibold mb-4 mt-8">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('1. ')) {
                  const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\. /));
                  return (
                    <ol key={idx} className="list-decimal pl-5 mb-6 space-y-2">
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-base sm:text-lg">{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                } else {
                  return (
                    <p key={idx} className={`text-base sm:text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
            
            {/* Article footer */}
            <div className="border-t border-gray-800 pt-8 mt-12">
              <p className="text-sm text-gray-400 mb-2">Thanks for reading!</p>
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-orange-500/20 text-orange-500' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  {isBookmarked ? 'Saved' : 'Save Article'}
                </button>
                <button 
                  onClick={shareArticle}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
              
              <Contactus />
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className={`sticky top-24 p-6 rounded-xl ${isDarkMode ? 'bg-stone-900' : 'bg-stone-100'}`}>
              {/* Author info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">WA</span>
                </div>
                <div>
                  <p className="font-medium">Waqar Ahmed</p>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              
              {/* Article info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Published</p>
                  <p className="font-medium">{article.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Reading time</p>
                  <p className="font-medium">{estimatedReadTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Your progress</p>
                  <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                    <div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Read more section */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="font-medium mb-4">Continue Reading</h3>
                <Link 
                  href="/thoughts"
                  className="text-orange-500 hover:text-orange-400 transition-colors flex items-center text-sm"
                >
                  View all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleReader;