import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockLifestyleArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/lifestyle/${slug}`;
  const article = mockLifestyleArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Phong cách sống`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function LifestyleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/lifestyle/${slug}`;
  const article = mockLifestyleArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="purple" categoryName="Phong cách sống" />;
}

export function generateStaticParams() {
  return mockLifestyleArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
