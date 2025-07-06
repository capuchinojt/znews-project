import { Category, NewsArticle } from "../types";

export const mockNewsData: NewsArticle[] = [
  {
    id: '1',
    title: 'Tin tức chính trị mới nhất hôm nay',
    summary: 'Tóm tắt tin tức chính trị...',
    content: 'Nội dung chi tiết...',
    imageUrl: '/images/news/political-news.jpg',
    category: 'chinh-tri',
    author: 'Phóng viên ABC',
    publishedAt: '2025-01-15T10:00:00Z',
    readTime: 5,
    tags: ['chính trị', 'thời sự'],
    featured: true,
    views: 1250
  },
  // ... more articles
];

export const categories: Category[] = [
  { id: '1', name: 'Thời sự', slug: 'thoi-su', icon: 'newspaper', color: '#e74c3c' },
  { id: '2', name: 'Thế giới', slug: 'the-gioi', icon: 'globe', color: '#3498db' },
  { id: '3', name: 'Kinh tế', slug: 'kinh-te', icon: 'trending-up', color: '#2ecc71' },
  { id: '4', name: 'Công nghệ', slug: 'cong-nghe', icon: 'cpu', color: '#9b59b6' },
  { id: '5', name: 'Thể thao', slug: 'the-thao', icon: 'zap', color: '#f39c12' },
  { id: '6', name: 'Giải trí', slug: 'giai-tri', icon: 'music', color: '#e67e22' },
];
