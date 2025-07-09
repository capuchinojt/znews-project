import {
  mockTechnologyArticles,
  mockHealthArticles,
  mockLifestyleArticles,
  mockTravelArticles,
  mockEntertainmentArticles,
  mockSportsArticles,
  mockSocietyArticles,
  mockLawArticles,
  mockPublishingArticles,
  mockBookWorldArticles,
  mockEducationArticles,
  mockAutomotiveArticles,
  mockAuthorArticles,
  mockMyReadingArticles,
  mockReadingCultureArticles,
  mockTTDNArticles,
} from '@/lib/data/mockCategoryColumns';
import { Article } from '@/lib/types';

// Mapping of category to their articles and colors
export const categoryConfig = {
  technology: {
    articles: mockTechnologyArticles,
    color: 'blue',
    name: 'Công nghệ',
  },
  health: {
    articles: mockHealthArticles,
    color: 'green',
    name: 'Sức khỏe',
  },
  lifestyle: {
    articles: mockLifestyleArticles,
    color: 'purple',
    name: 'Phong cách sống',
  },
  travel: {
    articles: mockTravelArticles,
    color: 'yellow',
    name: 'Du lịch',
  },
  entertainment: {
    articles: mockEntertainmentArticles,
    color: 'pink',
    name: 'Giải trí',
  },
  sports: {
    articles: mockSportsArticles,
    color: 'orange',
    name: 'Thể thao',
  },
  society: {
    articles: mockSocietyArticles,
    color: 'indigo',
    name: 'Xã hội',
  },
  law: {
    articles: mockLawArticles,
    color: 'gray',
    name: 'Pháp luật',
  },
  publishing: {
    articles: mockPublishingArticles,
    color: 'teal',
    name: 'Xuất bản',
  },
  bookworld: {
    articles: mockBookWorldArticles,
    color: 'emerald',
    name: 'Thế giới sách',
  },
  education: {
    articles: mockEducationArticles,
    color: 'cyan',
    name: 'Giáo dục',
  },
  automotive: {
    articles: mockAutomotiveArticles,
    color: 'red',
    name: 'Ô tô',
  },
  author: {
    articles: mockAuthorArticles,
    color: 'amber',
    name: 'Tác giả',
  },
  myreading: {
    articles: mockMyReadingArticles,
    color: 'lime',
    name: 'Góc đọc của tôi',
  },
  readingculture: {
    articles: mockReadingCultureArticles,
    color: 'violet',
    name: 'Văn hóa đọc',
  },
  ttdn: {
    articles: mockTTDNArticles,
    color: 'slate',
    name: 'Thông tin doanh nghiệp',
  },
} as const;

export type CategoryKey = keyof typeof categoryConfig;

// Utility function to find article by link
export function findArticleByLink(link: string): { article: Article; category: CategoryKey; config: typeof categoryConfig[CategoryKey] } | null {
  for (const [categoryKey, config] of Object.entries(categoryConfig)) {
    const article = config.articles.find(item => item.link === link);
    if (article) {
      return {
        article,
        category: categoryKey as CategoryKey,
        config,
      };
    }
  }
  return null;
}

// Get all articles
export function getAllArticles(): Article[] {
  return Object.values(categoryConfig).flatMap(config => config.articles);
}

// Get articles by category
export function getArticlesByCategory(category: CategoryKey): Article[] {
  return categoryConfig[category]?.articles || [];
}

// Generate static params for all categories
export function generateAllStaticParams() {
  const allParams: Record<CategoryKey, Array<{ slug: string }>> = {} as any;
  
  for (const [categoryKey, config] of Object.entries(categoryConfig)) {
    allParams[categoryKey as CategoryKey] = config.articles.map((article) => ({
      slug: article.link.split('/').pop() || '',
    }));
  }
  
  return allParams;
}
