import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockAutomotiveArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/automotive/${slug}`;
  const article = mockAutomotiveArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Ô tô`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function AutomotiveDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/automotive/${slug}`;
  const article = mockAutomotiveArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="red" categoryName="Ô tô" />;
}

export function generateStaticParams() {
  return mockAutomotiveArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
