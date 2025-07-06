import { NextRequest, NextResponse } from 'next/server';
import { mockNewsData, categories } from '@/lib/data/mockNews';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '4');

  // Group articles by category
  const articlesByCategory: { [key: string]: any[] } = {};
  
  categories.forEach(category => {
    const categoryArticles = mockNewsData
      .filter(article => article.category === category.slug)
      .slice(0, limit);
    
    if (categoryArticles.length > 0) {
      articlesByCategory[category.slug] = categoryArticles;
    }
  });

  return NextResponse.json({
    data: articlesByCategory,
    status: 'success'
  });
}