import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockBookWorldArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/bookworld/${slug}`;
  const article = mockBookWorldArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Thế giới sách`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function BookworldDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/bookworld/${slug}`;
  const article = mockBookWorldArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="emerald" categoryName="Thế giới sách" />;
}

export function generateStaticParams() {
  return mockBookWorldArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
