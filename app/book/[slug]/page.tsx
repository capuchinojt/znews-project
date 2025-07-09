import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { books } from '@/lib/data/mockNews';
import BookDetail from '@/components/common/BookDetail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bookLink = `/book/${slug}`;
  const book = books.find(item => item.link === bookLink);
  
  if (!book) {
    return {
      title: 'Sách không tìm thấy',
      description: 'Sách bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${book.title} | Sách`,
    description: book.title,
    openGraph: {
      title: book.title,
      description: book.title,
      images: book.imageUrl ? [book.imageUrl] : [],
      type: 'article',
    },
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bookLink = `/book/${slug}`;
  const book = books.find(item => item.link === bookLink);
  
  if (!book) {
    notFound();
  }

  return <BookDetail book={book} categoryColor="amber" categoryName="Sách" />;
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.link.split('/').pop() || '',
  }));
}
