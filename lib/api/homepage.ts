import { Article, Book, Multimedia } from "../types";
import { getArticles, getNews } from "./news";
import { getBooks } from "./books";
import { getMultimedia } from "./multimedia";

// Optimized data fetching for homepage
export async function getHomePageData() {
  try {
    // Use Promise.allSettled for better error handling
    const [articlesResult, newsResult, booksResult, multimediaResult] = await Promise.allSettled([
      getArticles(),
      getNews(),
      getBooks(),
      getMultimedia(),
    ]);

    // Extract data with fallbacks
    const articles: Article[] = articlesResult.status === 'fulfilled' ? articlesResult.value : [];
    const news: Article[] = newsResult.status === 'fulfilled' ? newsResult.value : [];
    const books: Book[] = booksResult.status === 'fulfilled' ? booksResult.value : [];
    const multimedia: Multimedia[] = multimediaResult.status === 'fulfilled' ? multimediaResult.value : [];

    // Log any errors for monitoring
    [articlesResult, newsResult, booksResult, multimediaResult].forEach((result, index) => {
      if (result.status === 'rejected') {
        const sources = ['articles', 'news', 'books', 'multimedia'];
        console.error(`Failed to fetch ${sources[index]}:`, result.reason);
      }
    });

    return {
      articles,
      news,
      books,
      multimedia,
      sidebarArticles: news.slice(1, 4),
      listArticles: articles.slice(4),
    };
  } catch (error) {
    console.error('Failed to fetch homepage data:', error);
    
    // Return empty data structure on complete failure
    return {
      articles: [],
      news: [],
      books: [],
      multimedia: [],
      sidebarArticles: [],
      listArticles: [],
    };
  }
}

// Cache for static data that doesn't change often
let staticDataCache: {
  data: any;
  timestamp: number;
} | null = null;

const STATIC_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getCachedHomePageData() {
  // Check if we have valid cached data
  if (staticDataCache && Date.now() - staticDataCache.timestamp < STATIC_CACHE_DURATION) {
    return staticDataCache.data;
  }

  // Fetch fresh data
  const data = await getHomePageData();
  
  // Update cache
  staticDataCache = {
    data,
    timestamp: Date.now(),
  };

  return data;
}
