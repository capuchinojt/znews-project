import { Category, NewsArticle } from "../types";

export const mockNewsData: NewsArticle[] = [
  {
    id: "1",
    title: "Tin tức chính trị mới nhất hôm nay",
    summary: "Tóm tắt tin tức chính trị...",
    content: "Nội dung chi tiết...",
    imageUrl: "/images/news/political-news.jpg",
    category: "chinh-tri",
    author: "Phóng viên ABC",
    publishedAt: "2025-01-15T10:00:00Z",
    readTime: 5,
    tags: ["chính trị", "thời sự"],
    featured: true,
    views: 1250,
  },
  // ... more articles
];

export const categories: Category[] = [
  { id: 1, name: "Xuất bản", slug: "xuat-ban" },
  { id: 2, name: "Tác giả", slug: "tac-gia" },
  { id: 3, name: "Kinh doanh", slug: "kinh-doanh" },
  { id: 4, name: "Thể thao", slug: "the-thao" },
  { id: 5, name: "Công nghệ", slug: "cong-nghe" },
  { id: 6, name: "Sức khỏe", slug: "suc-khoe" },
  { id: 7, name: "Đời sống", slug: "doi-song" },
  { id: 8, name: "Giải trí", slug: "giai-tri" },
];

export const mockNews = [
  {
    id: 1,
    title: "Trịnh Linh Giang vô địch đơn nam PPA Tour châu Á",
    summary:
      "Tay vợt trẻ Việt Nam đã có chiến thắng ấn tượng tại giải đấu danh giá",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    category: "Thể thao",
    publishedAt: "2024-01-15T10:30:00Z",
    isMain: true,
  },
  {
    id: 2,
    title: "Sao Liverpool tiếc tùng, không dự tăng lễ của Jota",
    summary:
      "Ngôi sao Liverpool bày tỏ sự tiếc nuối khi không thể tham dự lễ cưới của đồng đội",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
    category: "Thể thao",
    publishedAt: "2024-01-15T09:15:00Z",
    isMain: false,
  },
  {
    id: 3,
    title: 'Anh Tây "ăn sập" hẻm nhỏ, đãn TP.HCM 30 năm còn phải xin địa chỉ',
    summary: "Câu chuyện thú vị về một người nước ngoài yêu ẩm thực Việt Nam",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=250&fit=crop",
    category: "Đời sống",
    publishedAt: "2024-01-15T08:00:00Z",
    isMain: false,
  },
  {
    id: 4,
    title: 'Vì "ngộ" - tự kể có bệnh ăn tâm thần đền ông trùm thế giới ngầm',
    summary: "Câu chuyện ly kỳ về thế giới ngầm và những nhân vật đặc biệt",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    category: "Xã hội",
    publishedAt: "2024-01-15T07:30:00Z",
    isMain: false,
  },
  {
    id: 5,
    title: "Điện viên phim người lớn trở thành giáng viên đại học ở Hàn Quốc",
    summary: "Câu chuyện về sự thay đổi nghề nghiệp và cuộc sống mới",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    category: "Quốc tế",
    publishedAt: "2024-01-15T06:45:00Z",
    isMain: false,
  },
  {
    id: 6,
    title: "Rui ro nghề trong tài pickleball từ vụ tấn công ở TP Hải Phòng",
    summary: "Phân tích về tình hình an ninh và các biện pháp bảo vệ",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
    category: "Thể thao",
    publishedAt: "2024-01-15T11:00:00Z",
    isMain: false,
  },
  {
    id: 7,
    title: "Bộ GD&ĐT công bố đáp án 18 môn thi tốt nghiệp THPT 2025",
    summary: "Thông tin chính thức về kỳ thi tốt nghiệp THPT năm 2025",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop",
    category: "Giáo dục",
    publishedAt: "2024-01-15T12:15:00Z",
    isMain: false,
  },
];

export const articles = [
  {
    id: "1",
    title: "Điều ước cuối cùng - phim Việt 'giải ngày' sơn bao kinh dị",
    description:
      "“Điều ước cuối cùng” là một trải nghiệm giải trí nhẹ nhàng với những cảnh hài hước, duyên dáng, lãng mạn còn hơn cả một cách tiếp cận những câu chuyện đời sâu sắc hơn đằng sau lòng người.",
    imageUrl: "https://photo.znews.vn/w1000/Uploaded/rohunaa/2025_07_06/DUCC_03_A1754.jpg", // Placeholder image, sẽ cần tạo
    category: "Phim Việt",
    link: "/article/dieu-uoc-cuoi-cung",
  },
  {
    id: "2",
    title:
      "FIFA Club World Cup 2025: Trình Linh Quang vô địch đơn nam PPA Tour Châu Âu",
    description: "Mô tả ngắn về giải đấu FIFA Club World Cup 2025.",
    imageUrl: "/images/fifa-club-world-cup.jpg",
    category: "FIFA Club World Cup",
    link: "/article/fifa-club-world-cup",
  },
  {
    id: "3",
    title: "Sao Liverpool tiếc tung, không dự tăng lễ của Jota",
    description:
      "Thông tin về cầu thủ Liverpool vắng mặt trong tang lễ của Jota.",
    imageUrl: "/images/liverpool-jota.jpg",
    category: "Bóng đá",
    link: "/article/liverpool-jota",
  },
  {
    id: "4",
    title: "Anh Tây 'ăn sập' hẻm nhỏ, dân TP.HCM 30 năm còn phải xin địa chỉ",
    description:
      "Câu chuyện về một người nước ngoài khám phá ẩm thực hẻm ở TP.HCM.",
    imageUrl: "/images/anh-tay-an-sap.jpg",
    category: "Ăn uống",
    link: "/article/anh-tay-an-sap",
  },
  {
    id: "5",
    title: "Vị 'ngọt' - sự cố có bệnh án tâm thần đến đúng trùm địa giới ngầm",
    description: "Tin tức về một sự kiện kỳ lạ liên quan đến bệnh án tâm thần.",
    imageUrl: "https://photo.znews.vn/w660/Uploaded/sgtnrn/2025_07_04/1_1.jpg",
    category: "Xã hội",
    link: "/article/vi-ngot",
  },
  {
    id: "6",
    title: "Diễn viên phim người lớn trở thành giảng viên đại học ở Hàn Quốc",
    description:
      "Câu chuyện về sự nghiệp bất ngờ của một diễn viên phim người lớn.",
    imageUrl: "https://photo.znews.vn/w480/Uploaded/yqdlmdxwp/2025_02_21/MG_New_MG5_znews_3_1.jpg",
    category: "Giải trí",
    link: "/article/dien-vien-han-quoc",
  },
  {
    id: "7",
    title: "Rủi ro nghe trọng tài pickleball từ vụ tấn công ở TP Hải Phòng",
    description:
      "Thông tin về vụ việc liên quan đến trọng tài pickleball ở Hải Phòng.",
    imageUrl: "/images/trong-tai-pickleball.jpg",
    category: "Thể thao",
    link: "/article/trong-tai-pickleball",
  },
  {
    id: "8",
    title: "Bộ GD&ĐT công bố đáp án 18 môn thi tốt nghiệp THPT 2025",
    description: "Thông báo về đáp án các môn thi tốt nghiệp THPT 2025.",
    imageUrl: "/images/thi-thpt-2025.jpg",
    category: "Giáo dục",
    link: "/article/thi-thpt-2025",
  },
];

export const books = [
  {
    id: 'book-1',
    title: 'Cách thức khai thác AI hiệu quả trong nghiên cứu và viết học thuật',
    imageUrl: '/images/books/ai-research.jpg', // Placeholder image
    link: '/book/ai-research',
  },
  {
    id: 'book-2',
    title: '3 chìa khóa để bạn hoàn tất khóa thiền cùng Osho mà không bỏ cuộc',
    imageUrl: '/images/books/osho-book.jpg',
    link: '/book/osho-meditation',
  },
  {
    id: 'book-3',
    title: 'Khám phá 10 nghề cổ vang danh Việt Nam tại góc đọc cuối tuần',
    imageUrl: '/images/books/vietnam-jobs.jpg',
    link: '/book/vietnam-jobs',
  },
  {
    id: 'book-4',
    title: 'Tác giả Việt đang vươn ra thế giới theo cách của riêng mình',
    imageUrl: '/images/books/vietnamese-author.jpg',
    link: '/book/vietnamese-author',
  },
  {
    id: 'book-5',
    title: 'Khi nào bạn nên làm ngược với số đông?',
    imageUrl: '/images/books/go-against-crowd.jpg',
    link: '/book/go-against-crowd',
  },
  {
    id: 'book-6',
    title: 'Top 5 cuốn sách về khởi nghiệp không thể bỏ qua',
    imageUrl: '/images/books/startup-books.jpg',
    link: '/book/startup-books',
  },
  {
    id: 'book-7',
    title: 'Hành trình khám phá vũ trụ qua những trang sách',
    imageUrl: '/images/books/space-books.jpg',
    link: '/book/space-books',
  },
];

export const hashtags = [
  '#FIFA Club World Cup 2025',
  '#Người nổi tiếng quảng cáo hàng giả',
  '#Sáp nhập doanh nghiệp',
]
