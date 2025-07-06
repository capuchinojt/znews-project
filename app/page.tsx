import { NewsGrid } from '@/components/news/NewsGrid';
import { FeaturedNews } from '@/components/news/FeaturedNews';
import { CategorySection } from '@/components/news/CategorySection';

async function getNewsData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  console.log('API baseUrl:', baseUrl);

  try {
    const urls = [
      `${baseUrl}/api/news/featured`,
      `${baseUrl}/api/news?limit=20`,
      `${baseUrl}/api/categories`,
      `${baseUrl}/api/news/by-category?limit=4`
    ];
    console.log('Fetching:', urls);

    const [featuredRes, latestRes, categoriesRes, categoryArticlesRes] = await Promise.all([
      fetch(urls[0], { next: { revalidate: 300 } }),
      fetch(urls[1], { next: { revalidate: 300 } }),
      fetch(urls[2], { next: { revalidate: 3600 } }),
      fetch(urls[3], { next: { revalidate: 300 } })
    ]);

    // Log status
    console.log('Status:', featuredRes.status, latestRes.status, categoriesRes.status, categoryArticlesRes.status);

    if (
      !featuredRes.ok ||
      !latestRes.ok ||
      !categoriesRes.ok ||
      !categoryArticlesRes.ok
    ) {
      throw new Error('One or more API endpoints failed');
    }

    const [featuredNews, latestNews, categories, categoryArticles] = await Promise.all([
      featuredRes.json(),
      latestRes.json(),
      categoriesRes.json(),
      categoryArticlesRes.json()
    ]);

    return {
      featuredNews: featuredNews.data || [],
      latestNews: latestNews.data || [],
      categories: categories.data || [],
      categoryArticles: categoryArticles.data || {}
    };
  } catch (error) {
    console.error('Error fetching news data:', error);
    return {
      featuredNews: [],
      latestNews: [],
      categories: [],
      categoryArticles: {}
    };
  }
}

export default async function HomePage() {
  const { featuredNews, latestNews, categories, categoryArticles } = await getNewsData();

  return (
    <main className="min-h-screen">
      {featuredNews.length > 0 && <FeaturedNews articles={featuredNews} />}
      {categories.length > 0 && (
        <CategorySection 
          categories={categories} 
          articlesByCategory={categoryArticles}
        />
      )}
      {latestNews.length > 0 && (
        <NewsGrid 
          articles={latestNews} 
          title="Tin tức mới nhất"
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        />
      )}
    </main>
  );
}