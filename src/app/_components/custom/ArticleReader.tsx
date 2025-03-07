"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contactus from "./Contactus";
import { ChevronLeft, Share2, Bookmark, BookmarkCheck } from 'lucide-react';

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
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [estimatedReadTime] = useState(article.readTime);
  
  const paragraphs = article.content
    .split('\n\n')
    .filter((p: string) => p.trim() !== '');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <div className=" text-gray-100 lg:ml-[15%] lg:w-[80%]">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-orange-500 transition-all duration-200"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 flex justify-between items-center">
        <Link 
          href="/thoughts"
          className="text-orange-500 hover:text-orange-400 transition-colors flex items-center group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline text-sm sm:text-base">Back to Articles</span>
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button onClick={() => setIsBookmarked(!isBookmarked)} className="p-1.5 sm:p-2 rounded-full hover:bg-gray-800/20 transition-colors">
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            ) : (
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          <button onClick={shareArticle} className="p-1.5 sm:p-2 rounded-full hover:bg-gray-800/20 transition-colors">
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Main content container */}
      <div className="mx-auto w-[95%] px-0 py-6 sm:py-8">
        {/* Featured image */}
        <div className="mb-6 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            width={1200}
            height={630}
            className="w-full object-cover aspect-video"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {/* Main article content */}
          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-100">{article.title}</h1>
            
            <div className="prose max-w-none prose-invert">
              {paragraphs.map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 mt-6 text-gray-100">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 mt-6 text-gray-100">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('1. ')) {
                  const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\. /));
                  return (
                    <ol key={idx} className="list-decimal pl-4 sm:pl-5 mb-4 sm:mb-6 space-y-1.5 text-gray-300">
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm sm:text-base lg:text-lg">{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                } else {
                  return (
                    <p key={idx} className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
            
            {/* Article footer */}
            <div className="border-t border-gray-700 pt-6 mt-8 sm:mt-12">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">Thanks for reading!</p>
              <div className="flex items-center gap-3 mb-6">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base ${
                    isBookmarked 
                      ? 'bg-orange-500/20 text-orange-500' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  {isBookmarked ? 'Saved' : 'Save'}
                </button>
                <button 
                  onClick={shareArticle}
                  className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-sm sm:text-base"
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
            <div className="md:sticky md:top-24 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gray-900">
              {/* Author info */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm sm:text-base text-white">WA</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base text-gray-100">Waqar Ahmed</p>
                  <p className="text-xs sm:text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              
              {/* Article info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Published</p>
                  <p className="font-medium text-sm sm:text-base text-gray-100">{article.date}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Reading time</p>
                  <p className="font-medium text-sm sm:text-base text-gray-100">{estimatedReadTime}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Your progress</p>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-full mt-1.5">
                    <div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Read more section */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-4 text-gray-100">Continue Reading</h3>
                <Link 
                  href="/thoughts"
                  className="text-orange-500 hover:text-orange-400 transition-colors flex items-center text-xs sm:text-sm"
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