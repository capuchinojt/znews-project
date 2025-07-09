import { NextResponse } from 'next/server';
import type { Article } from '@/lib/types';
import {
  // First Group
  mockTechnologyArticles,
  mockHealthArticles,
  mockLifestyleArticles,
  mockTravelArticles,
  // Second Group
  mockEntertainmentArticles,
  mockSportsArticles,
  mockSocietyArticles,
  mockLawArticles,
  // Third Group
  mockPublishingArticles,
  mockBookWorldArticles,
  mockEducationArticles,
  mockAutomotiveArticles,
  // Fourth Group
  mockAuthorArticles,
  mockMyReadingArticles,
  mockReadingCultureArticles,
  mockTTDNArticles,
} from '@/lib/data/mockCategoryColumns';

export interface CategoryGroup {
  id: string;
  title: string;
  categories: CategoryData[];
}

export interface CategoryData {
  title: string;
  articles: Article[];
  categorySlug: string;
}

export interface CategoryColumnsResponse {
  success: boolean;
  data: CategoryGroup[];
  timestamp: string;
}

// Simulate API delay for realistic testing
const SIMULATED_DELAY = 100;

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));

    const categoryGroups: CategoryGroup[] = [
      {
        id: 'first-group',
        title: 'Tin tức chính',
        categories: [
          {
            title: 'CÔNG NGHỆ',
            articles: mockTechnologyArticles,
            categorySlug: 'cong-nghe',
          },
          {
            title: 'SỨC KHỎE',
            articles: mockHealthArticles,
            categorySlug: 'suc-khoe',
          },
          {
            title: 'ĐỜI SỐNG',
            articles: mockLifestyleArticles,
            categorySlug: 'doi-song',
          },
          {
            title: 'DU LỊCH',
            articles: mockTravelArticles,
            categorySlug: 'du-lich',
          },
        ],
      },
      {
        id: 'second-group',
        title: 'Xã hội & Giải trí',
        categories: [
          {
            title: 'GIẢI TRÍ',
            articles: mockEntertainmentArticles,
            categorySlug: 'giai-tri',
          },
          {
            title: 'THỂ THAO',
            articles: mockSportsArticles,
            categorySlug: 'the-thao',
          },
          {
            title: 'XÃ HỘI',
            articles: mockSocietyArticles,
            categorySlug: 'xa-hoi',
          },
          {
            title: 'PHÁP LUẬT',
            articles: mockLawArticles,
            categorySlug: 'phap-luat',
          },
        ],
      },
      {
        id: 'third-group',
        title: 'Xuất bản & Giáo dục',
        categories: [
          {
            title: 'XUẤT BẢN',
            articles: mockPublishingArticles,
            categorySlug: 'xuat-ban',
          },
          {
            title: 'THẾ GIỚI SÁCH',
            articles: mockBookWorldArticles,
            categorySlug: 'the-gioi-sach',
          },
          {
            title: 'GIÁO DỤC',
            articles: mockEducationArticles,
            categorySlug: 'giao-duc',
          },
          {
            title: 'XE',
            articles: mockAutomotiveArticles,
            categorySlug: 'xe',
          },
        ],
      },
      {
        id: 'fourth-group',
        title: 'Văn hóa & Doanh nghiệp',
        categories: [
          {
            title: 'TÁC GIẢ',
            articles: mockAuthorArticles,
            categorySlug: 'tac-gia',
          },
          {
            title: 'CUỐN SÁCH TÔI ĐỌC',
            articles: mockMyReadingArticles,
            categorySlug: 'cuon-sach-toi-doc',
          },
          {
            title: 'VĂN HÓA ĐỌC',
            articles: mockReadingCultureArticles,
            categorySlug: 'van-hoa-doc',
          },
          {
            title: 'TTDN',
            articles: mockTTDNArticles,
            categorySlug: 'ttdn',
          },
        ],
      },
    ];

    const response: CategoryColumnsResponse = {
      success: true,
      data: categoryGroups,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching category columns data:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch category columns data',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Support OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'GET, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
