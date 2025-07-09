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

// Third Group - Mock data for publishing articles
export const mockPublishingArticles: Article[] = [
  {
    id: "publishing-1",
    title: "Ngành xuất bản Việt Nam phát triển mạnh",
    description: "Ngành xuất bản Việt Nam đạt nhiều thành tựu đáng kể trong năm qua.",
    imageUrl: "/images/publishing/Thiet_ke_chua_co_ten_7_.webp",
    category: "publishing",
    link: "/publishing/nganh-xuat-ban-phat-trien",
    summary: "Thành tựu ngành xuất bản Việt Nam",
  },
  {
    id: "publishing-2", 
    title: "Sách điện tử ngày càng phổ biến",
    description: "Xu hướng đọc sách điện tử tăng mạnh trong thời đại số.",
    imageUrl: "/images/publishing/sach_1.webp",
    category: "publishing",
    link: "/publishing/sach-dien-tu-pho-bien",
    summary: "Xu hướng sách điện tử",
  },
  {
    id: "publishing-3",
    title: "Nhà xuất bản nước ngoài đầu tư vào Việt Nam",
    description: "Nhiều nhà xuất bản quốc tế mở rộng thị trường tại Việt Nam.",
    imageUrl: "/images/publishing/cuoc_thi_viet_chua_lanh_bi_gia_mao.webp",
    category: "publishing", 
    link: "/publishing/nha-xuat-ban-nuoc-ngoai",
    summary: "Đầu tư xuất bản nước ngoài",
  },
  {
    id: "publishing-4",
    title: "Bản quyền sách được bảo vệ chặt chẽ hơn",
    description: "Các biện pháp bảo vệ bản quyền sách được tăng cường.",
    imageUrl: "/images/publishing/copyright-protection.webp",
    category: "publishing",
    link: "/publishing/bao-ve-ban-quyen-sach", 
    summary: "Bảo vệ bản quyền sách",
  },
];

// Mock data for book world articles
export const mockBookWorldArticles: Article[] = [
  {
    id: "bookworld-1",
    title: "10 cuốn sách bán chạy nhất năm 2025",
    description: "Danh sách những cuốn sách được độc giả yêu thích nhất trong năm.",
    imageUrl: "/images/books/Bat_nat_hoc_duong.webp",
    category: "bookworld",
    link: "/bookworld/sach-ban-chay-nhat-2025",
    summary: "Top sách bán chạy 2025",
  },
  {
    id: "bookworld-2",
    title: "Thế giới sách Việt Nam ra mắt tác phẩm mới",
    description: "Nhiều tác phẩm văn học Việt Nam được xuất bản trong năm qua.",
    imageUrl: "/images/books/dream_about_success.webp", 
    category: "bookworld",
    link: "/bookworld/tac-pham-viet-nam-moi",
    summary: "Văn học Việt Nam mới",
  },
  {
    id: "bookworld-3",
    title: "Sách thiếu nhi Việt Nam chinh phục độc giả quốc tế",
    description: "Các tác phẩm thiếu nhi Việt Nam được dịch và xuất bản ra nước ngoài.",
    imageUrl: "/images/books/Thiet_ke_chua_co_ten_50_.webp",
    category: "bookworld",
    link: "/bookworld/sach-thieu-nhi-quoc-te",
    summary: "Sách thiếu nhi ra quốc tế",
  },
  {
    id: "bookworld-4",
    title: "Hội sách tại TP.HCM thu hút hàng triệu lượt khách",
    description: "Sự kiện hội sách lớn nhất năm tại TP.HCM thành công tốt đẹp.",
    imageUrl: "/images/books/nguyen_phan_que_mai_the_mountains_sing_dust_child_xuat_khau_van_hoc_viet_ra_the_gioi.webp",
    category: "bookworld",
    link: "/bookworld/hoi-sach-tp-hcm",
    summary: "Hội sách TP.HCM thành công",
  },
];

// Mock data for education articles  
export const mockEducationArticles: Article[] = [
  {
    id: "education-1",
    title: "Giáo dục STEM được đẩy mạnh trong trường học",
    description: "Các trường học tích cực triển khai chương trình giáo dục STEM.",
    imageUrl: "/images/education/HOT06185.webp",
    category: "education",
    link: "/education/giao-duc-stem",
    summary: "Giáo dục STEM trong trường học",
  },
  {
    id: "education-2",
    title: "Học trực tuyến thay đổi phương pháp giảng dạy",
    description: "Công nghệ học trực tuyến mang lại nhiều cơ hội mới cho giáo dục.",
    imageUrl: "/images/education/re_1.webp",
    category: "education", 
    link: "/education/hoc-truc-tuyen",
    summary: "Xu hướng học trực tuyến",
  },
  {
    id: "education-3",
    title: "Chương trình giáo dục mới tập trung vào kỹ năng mềm",
    description: "Giáo dục Việt Nam chú trọng phát triển kỹ năng mềm cho học sinh.",
    imageUrl: "/images/education/z6728583323975_1512f8f1e02e1dab8e2d9b6b9a4f51e9_1.webp",
    category: "education",
    link: "/education/ky-nang-mem-giao-duc",
    summary: "Giáo dục kỹ năng mềm",
  },
  {
    id: "education-4", 
    title: "Thi THPT Quốc gia 2025 có nhiều thay đổi",
    description: "Kỳ thi THPT Quốc gia năm 2025 áp dụng nhiều quy định mới.",
    imageUrl: "/images/education/thpt-quoc-gia-2025.webp",
    category: "education",
    link: "/education/thpt-quoc-gia-2025",
    summary: "Thay đổi thi THPT 2025",
  },
];

// Mock data for automotive articles
export const mockAutomotiveArticles: Article[] = [
  {
    id: "automotive-1",
    title: "Xe điện VinFast mở rộng thị trường quốc tế",
    description: "VinFast tiếp tục chinh phục các thị trường xe điện trên thế giới.",
    imageUrl: "/images/automotive/1111.webp",
    category: "automotive",
    link: "/automotive/vinfast-mo-rong-thi-truong",
    summary: "VinFast mở rộng quốc tế",
  },
  {
    id: "automotive-2",
    title: "Ô tô hybrid ngày càng được ưa chuộng tại Việt Nam",
    description: "Xe hybrid trở thành lựa chọn phổ biến của người tiêu dùng Việt.",
    imageUrl: "/images/automotive/IMG_5831.webp", 
    category: "automotive",
    link: "/automotive/oto-hybrid-viet-nam",
    summary: "Xu hướng xe hybrid",
  },
  {
    id: "automotive-3",
    title: "Thuế ô tô có thể được điều chỉnh trong năm 2025",
    description: "Chính phủ đang xem xét điều chỉnh thuế đối với một số dòng xe.",
    imageUrl: "/images/automotive/Julia_Nguyen_18.webp",
    category: "automotive",
    link: "/automotive/thue-oto-2025",
    summary: "Điều chỉnh thuế ô tô 2025",
  },
  {
    id: "automotive-4",
    title: "Công nghệ lái xe tự động phát triển mạnh",
    description: "Các hãng xe đầu tư mạnh vào công nghệ lái xe tự động.",
    imageUrl: "/images/automotive/autonomous-driving.webp",
    category: "automotive", 
    link: "/automotive/lai-xe-tu-dong",
    summary: "Công nghệ lái xe tự động",
  },
];

// Fourth Group - Mock data for author articles
export const mockAuthorArticles: Article[] = [
  {
    id: "author-1", 
    title: "Tác giả Nguyễn Nhật Ánh ra mắt tiểu thuyết mới",
    description: "Nhà văn Nguyễn Nhật Ánh giới thiệu tác phẩm mới dành cho thiếu nhi.",
    imageUrl: "/images/authors/02eab535fa024100a194c28994f8d5ee.webp",
    category: "author",
    link: "/author/nguyen-nhat-anh-tieu-thuyet-moi",
    summary: "Tiểu thuyết mới của Nguyễn Nhật Ánh",
  },
  {
    id: "author-2",
    title: "Cuộc phỏng vấn độc quyền với tác giả Tô Hoài",
    description: "Chia sẻ từ tác giả về hành trình sáng tác và nguồn cảm hứng.",
    imageUrl: "/images/authors/dream_about_success.webp",
    category: "author",
    link: "/author/phong-van-to-hoai", 
    summary: "Phỏng vấn tác giả Tô Hoài",
  },
  {
    id: "author-3",
    title: "Tác giả trẻ Việt Nam được vinh danh quốc tế",
    description: "Nhiều tác giả trẻ Việt Nam nhận giải thưởng văn học quốc tế.",
    imageUrl: "/images/authors/nguyen_phan_que_mai_the_mountains_sing_dust_child_xuat_khau_van_hoc_viet_ra_the_gioi.webp",
    category: "author",
    link: "/author/tac-gia-tre-vinh-danh-quoc-te",
    summary: "Tác giả trẻ được vinh danh",
  },
  {
    id: "author-4",
    title: "Hội nghị gặp mặt các nhà văn Việt Nam",
    description: "Sự kiện giao lưu văn học quy tụ nhiều tác giả nổi tiếng.",
    imageUrl: "/images/authors/writers-conference.webp",
    category: "author", 
    link: "/author/hoi-nghi-nha-van",
    summary: "Hội nghị nhà văn Việt Nam",
  },
];

// Mock data for my reading articles
export const mockMyReadingArticles: Article[] = [
  {
    id: "myreading-1",
    title: "Cuốn sách thay đổi cuộc đời tôi",
    description: "Những cuốn sách có tác động sâu sắc đến cuộc sống của độc giả.",
    imageUrl: "/images/reading/nguyen_phan_que_mai_the_mountains_sing_dust_child_xuat_khau_van_hoc_viet_ra_the_gioi.webp",
    category: "myreading",
    link: "/myreading/sach-thay-doi-cuoc-doi",
    summary: "Sách thay đổi cuộc đời",
  },
  {
    id: "myreading-2",
    title: "Thói quen đọc sách trước khi ngủ",
    description: "Lợi ích của việc đọc sách trước khi đi ngủ đối với sức khỏe.",
    imageUrl: "/images/reading/Thiet_ke_chua_co_ten_50_.webp",
    category: "myreading",
    link: "/myreading/doc-sach-truoc-khi-ngu",
    summary: "Đọc sách trước khi ngủ",
  },
  {
    id: "myreading-3", 
    title: "Cách tôi ghi chú khi đọc sách",
    description: "Phương pháp ghi chú hiệu quả để ghi nhớ nội dung sách tốt hơn.",
    imageUrl: "/images/reading/bismark.webp",
    category: "myreading",
    link: "/myreading/cach-ghi-chu-doc-sach",
    summary: "Ghi chú khi đọc sách",
  },
  {
    id: "myreading-4",
    title: "Đọc sách điện tử vs sách giấy: So sánh trải nghiệm",
    description: "Ưu nhược điểm của việc đọc sách điện tử và sách giấy.",
    imageUrl: "/images/reading/ebook-vs-paperbook.webp",
    category: "myreading",
    link: "/myreading/sach-dien-tu-vs-sach-giay",
    summary: "So sánh sách điện tử và sách giấy",
  },
];

// Mock data for reading culture articles
export const mockReadingCultureArticles: Article[] = [
  {
    id: "readingculture-1",
    title: "Văn hóa đọc sách ở Việt Nam đang phục hồi",
    description: "Thói quen đọc sách của người Việt có những dấu hiệu tích cực.",
    imageUrl: "/images/culture/an_phu_thong_xe_znews_151.webp", 
    category: "readingculture",
    link: "/readingculture/van-hoa-doc-sach-phuc-hoi",
    summary: "Văn hóa đọc phục hồi",
  },
  {
    id: "readingculture-2",
    title: "Thư viện công cộng - Không gian văn hóa đọc",
    description: "Vai trò của thư viện công cộng trong việc xây dựng văn hóa đọc.",
    imageUrl: "/images/culture/IMG_5831.webp",
    category: "readingculture", 
    link: "/readingculture/thu-vien-cong-cong",
    summary: "Thư viện và văn hóa đọc",
  },
  {
    id: "readingculture-3",
    title: "Câu lạc bộ đọc sách - Xu hướng mới của giới trẻ",
    description: "Các câu lạc bộ đọc sách ngày càng thu hút người tham gia.",
    imageUrl: "/images/culture/Julia_Nguyen_18.webp",
    category: "readingculture",
    link: "/readingculture/cau-lac-bo-doc-sach",
    summary: "Câu lạc bộ đọc sách",
  },
  {
    id: "readingculture-4",
    title: "Gia đình và văn hóa đọc từ nhỏ",
    description: "Tầm quan trọng của việc nuôi dưỡng thói quen đọc từ gia đình.",
    imageUrl: "/images/culture/family-reading.webp",
    category: "readingculture",
    link: "/readingculture/gia-dinh-van-hoa-doc",
    summary: "Gia đình và văn hóa đọc",
  },
];

// Mock data for TTDN (Thông tin doanh nghiệp) articles  
export const mockTTDNArticles: Article[] = [
  {
    id: "ttdn-1",
    title: "Startup công nghệ Việt Nam gọi vốn thành công",
    description: "Nhiều startup trong nước thu hút đầu tư từ các quỹ quốc tế.",
    imageUrl: "/images/business/2025_04_04T145333Z_433579739_RC2XPDA5407T_RTRMADP_3_USA_TRUMP_TARIFFS_OPTIONS.webp",
    category: "ttdn",
    link: "/ttdn/startup-goi-von-thanh-cong",
    summary: "Startup Việt gọi vốn thành công",
  },
  {
    id: "ttdn-2", 
    title: "Doanh nghiệp SME thích ứng với chuyển đổi số",
    description: "Các doanh nghiệp vừa và nhỏ tích cực ứng dụng công nghệ số.",
    imageUrl: "/images/business/att.Ll7NR87ZRSOnf96dPFFAIF4qZunBBXe_oMhIMCpd4t8.webp",
    category: "ttdn",
    link: "/ttdn/sme-chuyen-doi-so",
    summary: "SME và chuyển đổi số",
  },
  {
    id: "ttdn-3",
    title: "Chính sách hỗ trợ doanh nghiệp khởi nghiệp",
    description: "Các chính sách mới nhằm thúc đẩy hệ sinh thái khởi nghiệp.",
    imageUrl: "/images/business/Hanh_khach_duoc_dua_len_xe_cuu_thuong_chuyen_dung.webp",
    category: "ttdn",
    link: "/ttdn/chinh-sach-ho-tro-khoi-nghiep",
    summary: "Chính sách hỗ trợ khởi nghiệp",
  },
  {
    id: "ttdn-4",
    title: "Xu hướng đầu tư vào doanh nghiệp xanh",
    description: "Các nhà đầu tư ngày càng quan tâm đến doanh nghiệp bền vững.",
    imageUrl: "/images/business/green-business-investment.webp", 
    category: "ttdn",
    link: "/ttdn/dau-tu-doanh-nghiep-xanh",
    summary: "Đầu tư doanh nghiệp xanh",
  },
];
