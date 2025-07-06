import { NextResponse } from 'next/server';
import { mockNewsData } from '@/lib/data/mockNews';

export async function GET() {
  // Filter featured articles
  const featuredArticles = mockNewsData.filter(article => article.featured);
  
  // Sort by views and published date
  const sortedFeatured = featuredArticles.sort((a, b) => {
    const viewsA = a.views || 0;
    const viewsB = b.views || 0;
    if (viewsA !== viewsB) {
      return viewsB - viewsA; // Higher views first
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return NextResponse.json({
    data: sortedFeatured.slice(0, 5), // Return top 5 featured articles
    status: 'success',
    total: sortedFeatured.length
  });
}