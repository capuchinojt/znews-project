import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockMyReadingArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/myreading/${slug}`;
  const article = mockMyReadingArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | My Reading`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function MyReadingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/myreading/${slug}`;
  const article = mockMyReadingArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="lime" categoryName="My Reading" />;
}

export function generateStaticParams() {
  return mockMyReadingArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
