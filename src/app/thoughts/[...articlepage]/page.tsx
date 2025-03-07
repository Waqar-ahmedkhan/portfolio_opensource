"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import ArticleReader from '@/app/_components/custom/ArticleReader'
import Articles from "../../_data/articles"

function Page() {
  // Get the article ID from the URL parameters
  const params = useParams();
  const articleId = params?.id as string;
  
  // Find the article that matches the ID
  const selectedArticle = articleId 
    ? Articles.find(article => article.id === articleId) 
    : Articles[0]; // Fallback to the first article if no ID is found
  
  return (
    <>
      {selectedArticle ? (
        <ArticleReader article={selectedArticle} />
      ) : (
        <div>Article not found</div>
      )}
    </>
  )
}

export default Page