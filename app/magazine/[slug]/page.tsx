import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockMagazineData } from '@/lib/data/mockMagazineData';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/magazine/${slug}`;
  const article = mockMagazineData.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Tạp chí`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function MagazineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/magazine/${slug}`;
  const article = mockMagazineData.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} categoryColor="purple" categoryName="Tạp chí" />;
}

export function generateStaticParams() {
  return mockMagazineData.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
