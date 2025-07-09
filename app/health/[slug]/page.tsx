import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockHealthArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/health/${slug}`;
  const article = mockHealthArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Sức khỏe`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function HealthDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/health/${slug}`;
  const article = mockHealthArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="green" categoryName="Sức khỏe" />;
}

export function generateStaticParams() {
  return mockHealthArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
