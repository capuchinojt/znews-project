// Mock data for magazine sidebar

export interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
  subtitle?: string;
}

export const mockMagazines: MagazineItem[] = [
  {
    id: "1",
    title: `Nguyễn Phan Quế Mai - Từ "The Mountains Sing" đến "Dust Child": Xuất khẩu văn học Việt ra thế giới`,
    imageUrl: "/images/books/nguyen_phan_que_mai_the_mountains_sing_dust_child_xuat_khau_van_hoc_viet_ra_the_gioi.webp",
    link: "/magazine/nguyen-phan-que-mai-xuat-khau-van-hoc-viet",
    subtitle: "Hành trình chinh phục độc giả quốc tế",
    description: "Câu chuyện về cách một tác giả Việt Nam đưa văn học nước nhà ra thế giới thông qua những tác phẩm đầy cảm xúc."
  },
  {
    id: "2", 
    title: "Thách thức của thế hệ trẻ trong thời đại số",
    imageUrl: "/images/books/Thiet_ke_chua_co_ten_50_.webp",
    link: "/magazine/thach-thuc-the-he-tre-thoi-dai-so",
    description: "Những khó khăn và cơ hội mà giới trẻ phải đối mặt trong kỷ nguyên công nghệ 4.0."
  },
  {
    id: "3",
    title: "Bí mật thành công của doanh nhân trẻ Việt Nam",
    imageUrl: "/images/books/dream_about_success.webp", 
    link: "/magazine/bi-mat-thanh-cong-doanh-nhan-tre",
    description: "Những bài học kinh nghiệm từ các doanh nhân thành đạt dưới 35 tuổi tại Việt Nam."
  },
  {
    id: "4",
    title: "Đường vào thiên đường của văn học hiện đại",
    imageUrl: "/images/books/Znews_Duong_vao_Thien_3_.webp",
    link: "/magazine/duong-vao-thien-duong-van-hoc",
    description: "Khám phá những xu hướng mới trong văn học đương đại và tác động của chúng đến đời sống."
  },
  {
    id: "5",
    title: "Bất ngờ học đường: Những câu chuyện thú vị từ giảng đường",
    imageUrl: "/images/books/Bat_nat_hoc_duong.webp",
    link: "/magazine/bat-ngo-hoc-duong",
    description: "Những khoảnh khắc đáng nhớ và bài học quý giá từ môi trường giáo dục Việt Nam."
  }
];

export const featuredMagazines = mockMagazines.slice(0, 3);
export const allMagazines = mockMagazines;
