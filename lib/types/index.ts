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

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
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
