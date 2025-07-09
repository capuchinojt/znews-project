import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockTechnologyArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/technology/${slug}`;
  const article = mockTechnologyArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function TechnologyDetailPage({ params }: PageProps) {
  // Convert slug back to match the link format
  const { slug } = await params;
  const articleLink = `/technology/${slug}`;
  
  // Find the article based on the link
  const article = mockTechnologyArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="blue" categoryName="Công nghệ" />;
}

export function generateStaticParams() {
  return mockTechnologyArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
