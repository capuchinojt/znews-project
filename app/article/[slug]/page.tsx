import { notFound } from 'next/navigation';
import { mockNews } from '@/lib/data/mockNews';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/article/${slug}`;
  const article = mockNews.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {article.imageUrl && (
          <div className="mb-6">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="mb-4">
          <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        {article.description && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Tóm tắt:</h2>
            <p className="text-gray-600 text-lg italic">
              {article.description}
            </p>
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 text-lg leading-relaxed">
            {article.description}
          </p>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            ID: {article.id}
          </p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return mockNews.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
