import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockSocietyArticles } from '@/lib/data/mockCategoryColumns';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/society/${slug}`;
  const article = mockSocietyArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Society`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function SocietyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/society/${slug}`;
  const article = mockSocietyArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="indigo" categoryName="Society" />;
}

export function generateStaticParams() {
  return mockSocietyArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
