// app/components/custom/DesignThoughts.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import articles from '../../_data/articles';
import ArticleReader from '../custom/ArticleReader';

const DesignThoughts: React.FC = () => {
  const pathname = usePathname();
  const isArticleDetail = pathname.startsWith('/thoughts/');
  const articleId = isArticleDetail ? pathname.split('/').pop() : null;
  const selectedArticle = articleId ? articles.find(article => article.id === articleId) : null;
  
  return (
    <div className="design-thoughts w-full md:w-4/5 lg:w-4/5 mx-auto px-4 sm:px-6 md:px-8">
      {!isArticleDetail ? (
        <>
          <div className="text-center sm:text-left sm:ml-4 md:ml-8 lg:ml-12 my-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              DESIGN
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-zinc-500">
              THOUGHTS
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6 md:gap-8 lg:gap-12">
            {articles.map((article) => (
              <Link 
                key={article.id}
                href={`/thoughts/${article.id}`}
                className="group relative bg-stone-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-stone-800 transition-colors block"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-32 h-48 sm:h-32 relative flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : selectedArticle ? (
        <ArticleReader article={selectedArticle} />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Link 
            href="/thoughts"
            className="text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center group"
          >
            <svg 
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesignThoughts;