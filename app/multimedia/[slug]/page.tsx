import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { multimediaArticles } from '@/lib/data/mockMultimedia';
import ArticleDetail from '@/components/common/ArticleDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleLink = `/multimedia/${slug}`;
  const article = multimediaArticles.find(item => item.link === articleLink);
  
  if (!article) {
    return {
      title: 'Bài viết không tìm thấy',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${article.title} | Multimedia`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function MultimediaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articleLink = `/multimedia/${slug}`;
  const article = multimediaArticles.find(item => item.link === articleLink);
  
  if (!article) {
    notFound();
  }

  // Transform article to match Article interface
  const articleWithSummary = {
    ...article,
    summary: article.description || article.title
  };

  return <ArticleDetail article={articleWithSummary} categoryColor="amber" categoryName="Multimedia" />;
}

export function generateStaticParams() {
  return multimediaArticles.map((article) => ({
    slug: article.link.split('/').pop() || '',
  }));
}
