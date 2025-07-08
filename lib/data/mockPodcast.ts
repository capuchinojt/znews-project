// Mock data for PodcastSidebar component

export const mockPodcastData = [
  {
    id: "1",
    title: "Tân Hoa hậu Phương Linh: 'Các sếp cho treo hình tôi khắp công ty'",
    imageUrl: "/images/podcasts/Vodcast_thumbnail1.webp",
    link: "/podcast/phuong-linh-interview",
    description: "Cuộc trò chuyện độc quyền với Tân Hoa hậu Việt Nam 2024"
  },
  {
    id: "2", 
    title: "Thu Trang: 'Tôi tham vọng có phim mấy trăm tỷ đồng'",
    imageUrl: "/images/podcasts/Vodcast_thumbnail2.webp",
    link: "/podcast/thu-trang",
    description: "Diễn viên hài chia sẻ về tham vọng điện ảnh"
  },
  {
    id: "3",
    title: "BAT Việt Nam: Phát triển bền vững không phải đánh đổi lợi ích kinh tế",
    imageUrl: "/images/podcasts/Vodcast_thumbnail3.webp",
    link: "/podcast/bat-vietnam",
    description: "Doanh nghiệp và trách nhiệm xã hội"
  },
  {
    id: "4",
    title: "Lãnh đạo Shopee: 'Cạnh tranh là cần thiết'",
    imageUrl: "/images/podcasts/Vodcast_thumbnail4.webp",
    link: "/podcast/shopee-leadership",
    description: "Chiến lược kinh doanh trong thời đại số"
  },
  {
    id: "5",
    title: "Startup Việt: Từ ý tưởng đến thành công",
    imageUrl: "/images/podcasts/startup.jpg",
    link: "/podcast/startup-vietnam", 
    description: "Hành trình khởi nghiệp của các founder trẻ"
  }
];

// Types for TypeScript
export interface PodcastItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
}

export interface PodcastSidebarProps {
  podcasts: PodcastItem[];
  title?: string;
}
