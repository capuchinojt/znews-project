import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { hashtags } from "@/lib/data/mockNews";
import SectionFeatured from "@/components/common/Section/SectionFeatured";
import BookCarousel from "@/components/books/BookCarousel";
import { MagazineCarousel } from "@/components/magazine";

import { getCachedHomePageData } from "@/lib/api/homepage";
import MultimediaSection from "@/components/multimedia/MultimediaSection";
import MainContent from "@/components/common/MainContent/MainContent";
import { CategorySection } from "@/components/common/Section";
import {
  mockBusinessArticles,
  mockLifestyleArticles,
} from "@/lib/data/mockCategoryData";
import CategoryColumnsGrid from "@/components/sections/CategoryColumnsGrid";
import { CategoryColumnsGridSecondGroup } from "@/components/sections";
import {
  mockTechnologyArticles,
  mockHealthArticles,
  mockLifestyleArticles as mockLifestyleColumnsArticles,
  mockTravelArticles,
  mockEntertainmentArticles,
  mockSportsArticles,
  mockSocietyArticles,
  mockLawArticles,
} from "@/lib/data/mockCategoryColumns";
import { mockMagazineData } from "@/lib/data/mockMagazineData";

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 300; // 5 minutes

export default async function Home() {
  // Use optimized data fetching
  const { articles, news, books, multimedia, sidebarArticles, listArticles } = await getCachedHomePageData();

  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {/* Header Section */}
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Header />
        </Container>
        <Box sx={{ height: { xs: 56, md: 64 } }} />
      </Box>

      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, sm: 3 } }}>
        <SectionFeatured
          articles={articles}
          listArticles={listArticles}
          sidebarArticles={sidebarArticles}
          hashtags={hashtags}
        />
        <Box>{books.length > 0 && <BookCarousel books={books} />}</Box>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 0, sm: 0 } }}>
        {multimedia.length > 0 && <MultimediaSection articles={multimedia} />}
      </Container>

      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, sm: 3 } }}>
        <MainContent articles={articles} />
      </Container>

      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <CategorySection
          title="Kinh doanh"
          articles={mockBusinessArticles}
          categorySlug="business"
          showNavigation={true}
          showDescription={true}
        />
      </Container>

      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <CategorySection
          title="Lifestyle"
          articles={mockLifestyleArticles}
          categorySlug="lifestyle"
          showNavigation={true}
          showDescription={true}
        />
      </Container>

      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <CategoryColumnsGrid
          technologyArticles={mockTechnologyArticles}
          healthArticles={mockHealthArticles}
          lifestyleArticles={mockLifestyleColumnsArticles}
          travelArticles={mockTravelArticles}
          maxArticlesPerColumn={4}
        />
      </Container>

      <Container maxWidth="lg" sx={{ mb: 0 }}>
        <CategoryColumnsGridSecondGroup
          entertainmentArticles={mockEntertainmentArticles}
          sportsArticles={mockSportsArticles}
          societyArticles={mockSocietyArticles}
          lawArticles={mockLawArticles}
        />
      </Container>

      <Box sx={{ backgroundColor: "#f5f5f5", py: 2 }}>
        <Container maxWidth="lg" sx={{ mb: 2, px: { xs: 2, sm: 3 } }}>
          <MagazineCarousel
            magazines={mockMagazineData}
            title="MAGAZINE"
          />
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
