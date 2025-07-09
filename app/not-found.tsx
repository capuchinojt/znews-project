import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trang không tìm thấy
          </h2>
          <p className="text-gray-600 text-lg">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Về trang chủ
          </Link>
          
          <div>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Hoặc quay lại trang chủ để khám phá thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
