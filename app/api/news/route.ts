// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { mockNewsData } from '@/lib/data/mockNews';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10');
  const page = parseInt(searchParams.get('page') || '1');

  let filteredNews = mockNewsData;
  
  if (category) {
    filteredNews = mockNewsData.filter(news => news.category === category);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedNews,
    total: filteredNews.length,
    page,
    limit,
    status: 'success'
  });
}
