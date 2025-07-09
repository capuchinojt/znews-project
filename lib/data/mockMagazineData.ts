// Mock data for magazine carousel
export const mockMagazineData = [
  {
    id: 'mag-1',
    title: 'Chuyện chưa từng xảy ra với hoa hậu ở Việt Nam',
    imageUrl: '/images/magazine/re_1.webp',
    link: '/magazine/chuyen-chua-tung-xay-ra-hoa-hau',
    category: 'TL;DR' as const,
    description: 'Những câu chuyện bí ẩn trong cuộc thi hoa hậu Việt Nam năm nay.'
  },
  {
    id: 'mag-2',
    title: 'Máy bay F-35 mà Iran tuyên bố bắn rơi là tiêm kích nguy hiểm nhất',
    imageUrl: '/images/magazine/F_3520Joint20Strike20Fighter2028629.webp',
    link: '/magazine/may-bay-f35-iran',
    category: 'MINI MAGAZINE' as const,
    description: 'Phân tích về máy bay chiến đấu F-35 và sự kiện tại Iran.'
  },
  {
    id: 'mag-3',
    title: '"Bản đồ Việt Nam hạnh phúc" ghép từ nụ cười của nghìn trái tim tự hào',
    imageUrl: '/images/magazine/HOT06185.webp',
    link: '/magazine/ban-do-viet-nam-hanh-phuc',
    category: 'LONGFORM' as const,
    description: 'Dự án tạo bản đồ Việt Nam từ những nụ cười hạnh phúc của người dân.'
  },
  {
    id: 'mag-4',
    title: '25 tuổi, tôi mang vết sẹo ung thư chính phục giấc mơ hoa hậu',
    imageUrl: '/images/magazine/thumb_2.webp',
    link: '/magazine/25-tuoi-vet-seo-ung-thu',
    category: 'STORY' as const,
    description: 'Câu chuyện cảm động về cô gái vượt qua ung thư để theo đuổi ước mơ.'
  },
  {
    id: 'mag-5',
    title: 'Cuộc sống bí ẩn của những nghệ sĩ nổi tiếng',
    imageUrl: '/images/magazine/z6728583323975_1512f8f1e02e1dab8e2d9b6b9a4f51e9_1.webp',
    link: '/magazine/cuoc-song-bi-an-nghe-si',
    category: 'TL;DR' as const,
    description: 'Khám phá cuộc sống riêng tư của các ngôi sao showbiz Việt.'
  },
  {
    id: 'mag-6',
    title: 'Khám phá công nghệ AI trong tương lai gần',
    imageUrl: '/images/magazine/2025_06_17T014843Z_990522237_RC2U3FAJ8QMN_RTRMADP_3_G7_SUMMIT.webp',
    link: '/magazine/cong-nghe-ai-tuong-lai',
    category: 'MINI MAGAZINE' as const,
    description: 'Những tiến bộ mới nhất trong lĩnh vực trí tuệ nhân tạo.'
  },
  {
    id: 'mag-7',
    title: 'Hành trình xây dựng thương hiệu từ số 0',
    imageUrl: '/images/magazine/img_0141_4953_8808.jpeg_1.webp',
    link: '/magazine/hanh-trinh-xay-dung-thuong-hieu',
    category: 'LONGFORM' as const,
    description: 'Câu chuyện về các doanh nhân thành công xây dựng empire từ con số 0.'
  },
  {
    id: 'mag-8',
    title: 'Điều kỳ diệu từ những mảnh ghép nhỏ bé',
    imageUrl: '/images/magazine/Nangtiencathumb.webp',
    link: '/magazine/dieu-ky-dieu-manh-ghep',
    category: 'STORY' as const,
    description: 'Những câu chuyện nhỏ bé tạo nên điều kỳ diệu trong cuộc sống.'
  }
];

// Type definitions for magazine
export interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  category: 'TL;DR' | 'MINI MAGAZINE' | 'LONGFORM' | 'STORY';
  description?: string;
}
