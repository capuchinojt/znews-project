import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockEntertainmentArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/entertainment/${slug}`;
  const article = mockEntertainmentArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Giải trí`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function EntertainmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/entertainment/${slug}`;
  const article = mockEntertainmentArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="pink" categoryName="Giải trí" />;
}

export function generateStaticParams() {
  return mockEntertainmentArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
