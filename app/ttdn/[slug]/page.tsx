import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockTTDNArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/ttdn/${slug}`;
  const article = mockTTDNArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | TTDN`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function TTDNDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/ttdn/${slug}`;
  const article = mockTTDNArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="slate" categoryName="TTDN" />;
}

export function generateStaticParams() {
  return mockTTDNArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
