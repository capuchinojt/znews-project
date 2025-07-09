import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockBusinessArticles } from '@/lib/data/mockCategoryData';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/business/${slug}`;
  const article = mockBusinessArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Kinh doanh`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/business/${slug}`;
  const article = mockBusinessArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="blue" categoryName="Kinh doanh" />;
}

export function generateStaticParams() {
  return mockBusinessArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
