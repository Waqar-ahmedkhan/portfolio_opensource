// app/components/custom/DesignThoughts.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  featuredImage: string;
}

const articles: Article[] = [
  {
    id: 'web-design-career',
    title: 'Starting and Growing a Career in Web Design',
    excerpt: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    image: '/images/web-design-thumb.jpg',
    featuredImage: '/images/web-design-featured.jpg',
    content: `
      # Starting and Growing a Career in Web Design
      
      As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.
      
      ## Getting Started
      
      The path to becoming a web designer often starts with mastering the fundamentals of HTML, CSS, and JavaScript. These languages form the backbone of web development and design.
      
      ## Building Your Portfolio
      
      Once you have the basic skills, start creating projects that showcase your abilities. Your portfolio is your most valuable asset when seeking jobs or clients.
      
      ## Staying Current
      
      The web design field evolves rapidly. Make it a habit to continuously learn new technologies, frameworks, and design patterns to stay competitive in the market.
    `
  },
  // Add similar image properties to other articles
];

const DesignThoughts: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };
  
  const renderArticleContent = () => {
    if (!selectedArticle) return null;
    
    const paragraphs = selectedArticle.content
      .split('\n\n')
      .filter(p => p.trim() !== '');
      
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setSelectedArticle(null)}
          className="mb-8 text-orange-500 hover:text-orange-400 transition-colors flex items-center group"
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
        </button>

        <div className="mb-12">
          <Image
            src={selectedArticle.featuredImage}
            alt={selectedArticle.title}
            width={1200}
            height={630}
            className="rounded-2xl object-cover aspect-video"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{selectedArticle.title}</h1>
            
            <div className="prose prose-invert max-w-none">
              {paragraphs.map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mb-6">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-semibold mb-4 mt-8">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('1. ')) {
                  const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\. /));
                  return (
                    <ol key={idx} className="list-decimal pl-5 mb-4 space-y-2">
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-lg">{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                } else {
                  return <p key={idx} className="text-lg leading-relaxed mb-6 text-gray-300">{paragraph}</p>;
                }
              })}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 p-6 bg-stone-900 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">WA</span>
                </div>
                <div>
                  <p className="font-medium">Waqar Ahmed</p>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Published</p>
                  <p className="font-medium">{selectedArticle.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Reading time</p>
                  <p className="font-medium">{selectedArticle.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="design-thoughts px-4 md:px-8 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center">
        DESIGN <span className="text-gray-600">THOUGHTS</span>
      </h1>
      
      {!selectedArticle ? (
        <div className="max-w-4xl mx-auto grid gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group relative bg-stone-900 rounded-2xl p-8 hover:bg-stone-800 transition-colors cursor-pointer"
              onClick={() => handleArticleClick(article)}
            >
              <div className="flex gap-6">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      ) : (
        renderArticleContent()
      )}
    </div>
  );
};

export default DesignThoughts;