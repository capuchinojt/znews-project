import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockPublishingArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/publishing/${slug}`;
  const article = mockPublishingArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Publishing`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function PublishingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/publishing/${slug}`;
  const article = mockPublishingArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="teal" categoryName="Publishing" />;
}

export function generateStaticParams() {
  return mockPublishingArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
