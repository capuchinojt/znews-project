export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  views?: number;
}

export interface Article {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  link: string;
  summary: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
}

export interface APIResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
  total?: number;
}

export interface Book {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export interface Multimedia {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  link: string;
}
