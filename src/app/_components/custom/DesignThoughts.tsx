// app/components/custom/DesignThoughts.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import articles from '../../_data/articles';
import Contactus from "../custom/Contactus"
const DesignThoughts: React.FC = () => {
  const pathname = usePathname();
  const isArticleDetail = pathname.startsWith('/thoughts/');
  const articleId = isArticleDetail ? pathname.split('/').pop() : null;
  const selectedArticle = articleId ? articles.find(article => article.id === articleId) : null;
  
  return (
    <div className="design-thoughts px-4 md:px-26">
      <div className='ml-24'>
      <h1 className="text-7xl font-bold ">
        DESIGN
      </h1>
       <h1 className='text-7xl font-bold mb-12 text-zinc-500 '>THOUGHTS</h1>
      </div>
     
     
      
      {!isArticleDetail ? (
        <div className=" ml-16 max-w-3xl mx-auto grid gap-12">
          {articles.map((article) => (
            <Link 
              key={article.id}
              href={`/thoughts/${article.id}`}
              className="group relative bg-stone-900 rounded-2xl p-8 hover:bg-stone-800 transition-colors block"
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
            </Link>
          ))}
        </div>
      ) : selectedArticle ? (
        <ArticleDetail article={selectedArticle} />
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

// Separate component for article detail
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

const ArticleDetail: React.FC<{ article: Article }> = ({ article }) => {
  const paragraphs = article.content
    .split('\n\n')
    .filter((p: string) => p.trim() !== '');
    
  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/thoughts"
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
      </Link>

      <div className="mb-12">
        <Image
          src={article.featuredImage}
          alt={article.title}
          width={1200}
          height={630}
          className="rounded-2xl object-cover aspect-video"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          
          <div className="prose prose-invert max-w-none">
            {paragraphs.map((paragraph: string, idx: number) => {
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
          <Contactus />
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
                <p className="font-medium">{article.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Reading time</p>
                <p className="font-medium">{article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignThoughts;