import type { Article } from "@/lib/types";

// Mock data for technology articles
export const mockTechnologyArticles: Article[] = [
  {
    id: "tech-1",
    title: "Giá iPhone 17 có thể tăng mạnh",
    description:
      "Apple có thể sẽ tăng giá iPhone 17 do chi phí sản xuất và thuế quan mới.",
    imageUrl: "/images/tech/Thue_quan_se_anh_huong_den_gia_iPhone_.webp",
    category: "technology",
    link: "/technology/gia-iphone-17-tang-manh",
    summary: "Phân tích về khả năng tăng giá iPhone 17 trong năm tới",
  },
  {
    id: "tech-2",
    title: "Chống hàng giả bằng nền tảng xác thực quốc gia",
    description:
      "Nền tảng xác thực quốc gia giúp người tiêu dùng nhận biết hàng thật, hàng giả.",
    imageUrl:
      "/images/tech/509510362_1160313009463030_8482552428869705040_n.webp",
    category: "technology",
    link: "/technology/chong-hang-gia-nen-tang-xac-thuc",
    summary: "Giải pháp công nghệ chống hàng giả",
  },
  {
    id: "tech-3",
    title: "Windows 11 thành hệ điều hành máy tính phổ biến nhất",
    description:
      "Windows 11 đã vượt qua Windows 10 để trở thành hệ điều hành được sử dụng nhiều nhất.",
    imageUrl: "/images/tech/01sifmSXX7aNVN61bv2ifVj_16.webp",
    category: "technology",
    link: "/technology/windows-11-pho-bien-nhat",
    summary: "Windows 11 dẫn đầu thị phần hệ điều hành",
  },
  {
    id: "tech-4",
    title: "AI tạo sinh đang thay đổi ngành công nghiệp game",
    description:
      "Trí tuệ nhân tạo tạo sinh mở ra những khả năng mới trong phát triển game.",
    imageUrl: "/images/tech/ai-gaming.webp",
    category: "technology",
    link: "/technology/ai-tao-sinh-game",
    summary: "Ứng dụng AI trong phát triển game",
  },
];

// Mock data for health articles
export const mockHealthArticles: Article[] = [
  {
    id: "health-1",
    title: "Cách mẹ hiện đại chăm đẻ kháng cho bé từ góc",
    description:
      "Những phương pháp chăm sóc trẻ em hiện đại để tăng cường sức đề kháng.",
    imageUrl: "/images/health/hang_gia_dau_xanh_1_58644.webp",
    category: "health",
    link: "/health/cham-de-khang-cho-be",
    summary: "Hướng dẫn chăm sóc sức khỏe trẻ em",
  },
  {
    id: "health-2",
    title:
      "HIU triển khai chương trình ĐH 3 năm, giúp sinh viên tốt nghiệp sớm",
    description: "Chương trình đào tạo y khoa 3 năm mới tại HIU.",
    imageUrl: "/images/health/hang_gia_dau_xanh_1_58644.webp",
    category: "health",
    link: "/health/hiu-chuong-trinh-3-nam",
    summary: "Đổi mới chương trình đào tạo y khoa",
  },
  {
    id: "health-3",
    title: "Các loại ký sinh trùng dễ lây nhiễm qua ăn uống",
    description:
      "Cảnh báo về các loại ký sinh trùng có thể lây qua thức ăn và nước uống.",
    imageUrl: "/images/health/ky_sinh_trung.webp",
    category: "health",
    link: "/health/ky-sinh-trung-an-uong",
    summary: "Phòng chống ký sinh trùng qua ăn uống",
  },
  {
    id: "health-4",
    title: "Bí quyết giữ sức khỏe trong thời tiết thay đổi",
    description: "Cách bảo vệ sức khỏe khi thời tiết chuyển mùa.",
    imageUrl: "/images/health/weather-health.webp",
    category: "health",
    link: "/health/suc-khoe-thoi-tiet",
    summary: "Chăm sóc sức khỏe theo mùa",
  },
];

// Mock data for lifestyle articles
export const mockLifestyleArticles: Article[] = [
  {
    id: "lifestyle-2",
    title: "VĐV Olympic đình doping vì hôn bạn trai",
    description: "Câu chuyện thú vị về vận động viên Olympic và test doping.",
    imageUrl: "/images/lifestyle/v2_5e519618ef9c862fe7e4cbc0bf7a2.webp",
    category: "lifestyle",
    link: "/lifestyle/vdv-olympic-doping",
    summary: "Sự cố doping bất ngờ tại Olympic",
  },
  {
    id: "lifestyle-3",
    title: 'Văn Lâm - Yến Xuân ký niệm ngày cưới: "Hạnh phúc vẫn vẹn nguyên"',
    description: "Cặp đôi nổi tiếng chia sẻ về cuộc sống hôn nhân hạnh phúc.",
    imageUrl: "/images/lifestyle/anh1.webp",
    category: "lifestyle",
    link: "/lifestyle/van-lam-yen-xuan-cuoi",
    summary: "Kỷ niệm ngày cưới của cặp đôi nổi tiếng",
  },
  {
    id: "lifestyle-4",
    title: "Xu hướng thời trang xuân hè 2025",
    description: "Những xu hướng thời trang mới nhất cho mùa xuân hè năm nay.",
    imageUrl: "/images/lifestyle/snapins_ai_3084848075542030543_1_.webp",
    category: "lifestyle",
    link: "/lifestyle/thoi-trang-xuan-he-2025",
    summary: "Cập nhật xu hướng thời trang mới",
  },
];

// Mock data for travel articles
export const mockTravelArticles: Article[] = [
  {
    id: "travel-1",
    title: 'Thảo đổ tàu mặc cạn "sông ảo" ở Khánh Hòa',
    description: "Khám phá hiện tượng thiên nhiên kỳ thú tại Khánh Hòa.",
    imageUrl: "/images/travel/tau-mac-can-4038-4235.jpgwebp.webp",
    category: "travel",
    link: "/travel/thao-do-tau-khanh-hoa",
    summary: "Hiện tượng thiên nhiên độc đáo tại Khánh Hòa",
  },
  {
    id: "travel-2",
    title: 'Trung Quốc "hốt bạc" nhờ miễn visa',
    description:
      "Chính sách miễn visa của Trung Quốc thu hút đông đảo du khách.",
    imageUrl: "/images/travel/du_lich_Trung_Quoc.webp",
    category: "travel",
    link: "/travel/trung-quoc-mien-visa",
    summary: "Tác động của chính sách miễn visa",
  },
  {
    id: "travel-3",
    title: "Lạ ngại của Đà Nẵng",
    description: "Những điểm du lịch độc đáo và mới lạ tại Đà Nẵng.",
    imageUrl: "/images/travel/1496_1499_Pano_1_zing.webp",
    category: "travel",
    link: "/travel/la-ngai-da-nang",
    summary: "Khám phá vẻ đẹp mới của Đà Nẵng",
  },
  {
    id: "travel-4",
    title: "Top 10 điểm đến hấp dẫn nhất Việt Nam 2025",
    description:
      "Danh sách những điểm du lịch không thể bỏ qua trong năm 2025.",
    imageUrl: "/images/travel/top-destinations.webp",
    category: "travel",
    link: "/travel/top-10-diem-den-2025",
    summary: "Những điểm đến hấp dẫn nhất năm 2025",
  },
];

// Mock data for entertainment articles
export const mockEntertainmentArticles: Article[] = [
  {
    id: "entertainment-1",
    title: "Sao Việt gây sốt với phong cách thời trang mới",
    description:
      "Những xu hướng thời trang độc đáo từ các nghệ sĩ Việt Nam gây ấn tượng.",
    imageUrl: "/images/entertainment/tien_tien.webp",
    category: "entertainment",
    link: "/entertainment/sao-viet-thoi-trang-moi",
    summary: "Phong cách thời trang mới của sao Việt",
  },
  {
    id: "entertainment-2",
    title: "Phim Việt chiếu rạp thu hút khán giả",
    description: "Những bộ phim Việt Nam mới nhất đang gây sốt phòng vé.",
    imageUrl: "/images/entertainment/BetterImage_1751979921444.webp",
    category: "entertainment",
    link: "/entertainment/phim-viet-chieu-rap",
    summary: "Phim Việt thành công tại phòng vé",
  },
  {
    id: "entertainment-3",
    title: "Concert âm nhạc quy mô lớn tại Hà Nội",
    description:
      "Sự kiện âm nhạc đặc biệt với sự tham gia của nhiều nghệ sĩ nổi tiếng.",
    imageUrl: "/images/entertainment/Anh_man_hinh_2025_07_08_luc_6.30.39_CH.webp",
    category: "entertainment",
    link: "/entertainment/concert-ha-noi",
    summary: "Concert âm nhạc lớn tại Hà Nội",
  },
  {
    id: "entertainment-4",
    title: "Reality show mới tạo sóng truyền hình",
    description:
      "Chương trình truyền hình thực tế mới gây chú ý với format độc đáo.",
    imageUrl: "/images/entertainment/reality-show.webp",
    category: "entertainment",
    link: "/entertainment/reality-show-moi",
    summary: "Reality show tạo sóng truyền hình",
  },
];

// Mock data for sports articles
export const mockSportsArticles: Article[] = [
  {
    id: "sports-1",
    title: "Đội tuyển Việt Nam chuẩn bị cho SEA Games",
    description:
      "Những buổi tập luyện chuẩn bị cho giải đấu khu vực sắp tới.",
    imageUrl: "/images/sports/img0025_21314040.webp",
    category: "sports",
    link: "/sports/doi-tuyen-viet-nam-sea-games",
    summary: "Chuẩn bị cho SEA Games",
  },
  {
    id: "sports-2",
    title: "Giải bóng đá V.League 2025 khởi tranh",
    description: "Mùa giải bóng đá hàng đầu Việt Nam chính thức bắt đầu.",
    imageUrl: "/images/sports/messi.webp",
    category: "sports",
    link: "/sports/v-league-2025-khoi-tranh",
    summary: "V.League 2025 bắt đầu",
  },
  {
    id: "sports-3",
    title: "VĐV Olympic định doping vì hôn bạn trai",
    description: "Câu chuyện thú vị về vận động viên Olympic và test doping.",
    imageUrl: "/images/sports/Fluminense_1.webp",
    category: "sports",
    link: "/sports/vdv-olympic-doping",
    summary: "Sự cố doping bất ngờ tại Olympic",
  },
  {
    id: "sports-4",
    title: "Tennis Việt Nam vươn tầm quốc tế",
    description: "Sự phát triển của tennis Việt Nam trên đấu trường quốc tế.",
    imageUrl: "/images/sports/tennis-vietnam.webp",
    category: "sports",
    link: "/sports/tennis-viet-nam-quoc-te",
    summary: "Tennis Việt Nam phát triển",
  },
];

// Mock data for society articles
export const mockSocietyArticles: Article[] = [
  {
    id: "society-1",
    title: 'Thực hư bức ảnh "chân dung 1.691 chàng trai bị Hồng tỷ lừa',
    description: "Sự thật về bức ảnh gây xôn xao mạng xã hội gần đây.",
    imageUrl: "/images/society/1_1.webp",
    category: "society",
    link: "/society/chan-dung-1691-chang-trai",
    summary: "Phân tích bức ảnh viral trên mạng",
  },
  {
    id: "society-2",
    title: "Tình trạng ùn tắc giao thông tại các thành phố lớn",
    description: "Vấn đề giao thông đô thị và những giải pháp được đề xuất.",
    imageUrl: "/images/society/TTTT.webp",
    category: "society",
    link: "/society/un-tac-giao-thong",
    summary: "Vấn đề giao thông đô thị",
  },
  {
    id: "society-3",
    title: "Chương trình hỗ trợ nhà ở xã hội",
    description: "Những chính sách mới về nhà ở cho người thu nhập thấp.",
    imageUrl: "/images/society/giai_cuu_be_trai_5_tuoi_bi_mac_ket_vao_ong_thoat_nuoc_7863_5675jpg_18422696.webp",
    category: "society",
    link: "/society/nha-o-xa-hoi",
    summary: "Chính sách nhà ở xã hội",
  },
  {
    id: "society-4",
    title: "Xu hướng già hóa dân số và thách thức",
    description: "Tình trạng già hóa dân số và những tác động xã hội.",
    imageUrl: "/images/society/aging-population.webp",
    category: "society",
    link: "/society/gia-hoa-dan-so",
    summary: "Thách thức già hóa dân số",
  },
];

// Mock data for law articles
export const mockLawArticles: Article[] = [
  {
    id: "law-1",
    title: "Luật Căn cước công dân có hiệu lực từ tháng 7",
    description: "Những thay đổi quan trọng trong luật căn cước công dân mới.",
    imageUrl: "/images/law/z5226526990598_a1efbde12c5e149e8_1751961732773_1_.webp",
    category: "law",
    link: "/law/luat-can-cuoc-cong-dan",
    summary: "Luật căn cước công dân mới",
  },
  {
    id: "law-2",
    title: "Quy định mới về bảo vệ dữ liệu cá nhân",
    description: "Các quy định pháp lý mới về bảo vệ thông tin cá nhân.",
    imageUrl: "/images/law/screen_shot_2025_07_08_at_172412_4495_8500.png.webp",
    category: "law",
    link: "/law/bao-ve-du-lieu-ca-nhan",
    summary: "Luật bảo vệ dữ liệu cá nhân",
  },
  {
    id: "law-3",
    title: "Xử lý vi phạm giao thông theo quy định mới",
    description: "Những thay đổi trong việc xử phạt vi phạm giao thông.",
    imageUrl: "/images/law/tai_nan5_16110752.webp",
    category: "law",
    link: "/law/xu-ly-vi-pham-giao-thong",
    summary: "Quy định xử phạt giao thông mới",
  },
  {
    id: "law-4",
    title: "Luật An toàn thông tin mạng được cập nhật",
    description: "Các quy định mới về an toàn thông tin trong môi trường số.",
    imageUrl: "/images/law/cybersecurity-law.webp",
    category: "law",
    link: "/law/luat-an-toan-thong-tin-mang",
    summary: "Luật an toàn thông tin mạng",
  },
];
