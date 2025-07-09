import * as React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CategoryKey, categoryConfig } from '@/lib/utils/articleUtils';
import ArticleDetail from '@/components/common/ArticleDetail';

interface CategoryDetailPageProps {
  params: {
    slug: string;
  };
  category: CategoryKey;
}

export function createCategoryDetailPage(category: CategoryKey) {
  const config = categoryConfig[category];
  
  async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const articleLink = `/${category}/${params.slug}`;
    const article = config.articles.find(item => item.link === articleLink);
    
    if (!article) {
      return {
        title: 'Bài viết không tìm thấy',
        description: 'Bài viết bạn tìm kiếm không tồn tại.',
      };
    }

    return {
      title: `${article.title} | ${config.name}`,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        images: article.imageUrl ? [article.imageUrl] : [],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.description,
        images: article.imageUrl ? [article.imageUrl] : [],
      },
    };
  }

  function CategoryDetailPage({ params }: { params: { slug: string } }) {
    const articleLink = `/${category}/${params.slug}`;
    const article = config.articles.find(item => item.link === articleLink);
    
    if (!article) {
      notFound();
    }

    return <ArticleDetail article={article} categoryColor={config.color} />;
  }

  function generateStaticParams() {
    return config.articles.map((article) => ({
      slug: article.link.split('/').pop() || '',
    }));
  }

  return {
    generateMetadata,
    default: CategoryDetailPage,
    generateStaticParams,
  };
}
