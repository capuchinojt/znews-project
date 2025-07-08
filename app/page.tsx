import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "@/components/common/Header";
import { hashtags } from "@/lib/data/mockNews";
import SectionFeatured from "@/components/common/Section/SectionFeatured";
import BookCarousel from "@/components/books/BookCarousel";

import { getArticles, getNews } from "@/lib/api/news";
import { getBooks } from "@/lib/api/books";
import { getMultimedia } from "@/lib/api/multimedia";
import MultimediaSection from "@/components/multimedia/MultimediaSection";
import MainContent from "@/components/common/MainContent/MainContent";
import { CategorySection } from "@/components/common/Section";
import { mockBusinessArticles, mockLifestyleArticles } from "@/lib/data/mockCategoryData";

export default async function Home() {
  const [articles, news, books, multimedia] = await Promise.all([
    getArticles(),
    getNews(),
    getBooks(),
    getMultimedia()
  ]);

  const sidebarArticles = news.slice(1, 4);
  const listArticles = articles.slice(4);

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
        <Box>
          {books.length > 0 && <BookCarousel books={books} />}
        </Box>
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
    </Box>
  );
}
