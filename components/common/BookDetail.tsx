import { Book } from '@/lib/types';
import Breadcrumb from './Breadcrumb';

interface BookDetailProps {
  book: Book;
  categoryColor?: string;
  categoryName?: string;
}

export default function BookDetail({ book, categoryColor = 'amber', categoryName = 'Sách' }: BookDetailProps) {
  const getCategoryBadgeClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      pink: 'bg-pink-100 text-pink-800',
      orange: 'bg-orange-100 text-orange-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      gray: 'bg-gray-100 text-gray-800',
      teal: 'bg-teal-100 text-teal-800',
      emerald: 'bg-emerald-100 text-emerald-800',
      cyan: 'bg-cyan-100 text-cyan-800',
      red: 'bg-red-100 text-red-800',
      amber: 'bg-amber-100 text-amber-800',
      lime: 'bg-lime-100 text-lime-800',
      violet: 'bg-violet-100 text-violet-800',
      slate: 'bg-slate-100 text-slate-800',
    };
    return colorMap[color] || colorMap.amber;
  };

  const breadcrumbItems = [
    {
      label: categoryName,
      href: '/book',
    },
    {
      label: book.title,
      href: book.link,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Book Image */}
        {book.imageUrl && (
          <div className="mb-6">
            <img 
              src={book.imageUrl} 
              alt={book.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        
        {/* Category Badge */}
        <div className="mb-4">
          <span className={`${getCategoryBadgeClass(categoryColor)} text-sm font-medium px-3 py-1 rounded-full`}>
            {categoryName}
          </span>
        </div>
        
        {/* Book Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {book.title}
        </h1>
        
        {/* Book Description - Since Book doesn't have description, we'll show a placeholder */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 text-lg leading-relaxed">
            Đây là một cuốn sách hay và bổ ích. Nội dung chi tiết sẽ được cập nhật sau.
          </p>
        </div>
        
        {/* Book Metadata */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>ID: {book.id}</span>
            <span>Loại: Sách</span>
          </div>
        </div>
        
        {/* Back to category button */}
        <div className="mt-6">
          <a
            href="/book"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            ← Quay lại danh sách sách
          </a>
        </div>
      </div>
    </div>
  );
}
