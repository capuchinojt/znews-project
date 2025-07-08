import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMemo } from "react";

import ArticleCard from "@/components/news/Article/ArticleCard";
import { NewsGrid } from "@/components/news/NewsGrid/NewsGrid";
import { Article } from "@/lib/types";
import SidebarArticlesSection from "@/components/common/Section/SidebarArticlesSection";

interface HotNewsProps {
  articles: Article[];
  isMd?: boolean;
  isSmall?: boolean;
}

export default function HotNews({
  articles,
  isMd = false,
  isSmall = false,
}: HotNewsProps) {
  // Memoize computed values to avoid recalculation on every render
  const { mainArticle, sidebarArticles, newsGridArticles } = useMemo(() => {
    if (articles.length === 0) {
      return { mainArticle: null, sidebarArticles: [], newsGridArticles: [] };
    }
    
    return {
      mainArticle: articles[0] || null,
      sidebarArticles: articles.slice(1, 3), // Use articles[1] and articles[2] for sidebar
      newsGridArticles: articles.slice(3), // Remaining for news grid
    };
  }, [articles]);

  // Memoize NewsGrid component to avoid re-creation
  const NewsGridComponent = useMemo(() => (
    <NewsGrid
      articles={newsGridArticles}
      variant="horizontal"
      columns={{ md: 12, lg: 12 }}
      isDisplayDescription={false}
    />
  ), [newsGridArticles]);

  // Early return if no articles
  if (!articles.length || !mainArticle) {
    return null;
  }

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} >
        {isMd ? (
          <>
            {/* mainArticle trước */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ArticleCard article={mainArticle} variant="main" />
              <SidebarArticlesSection
                listArticles={sidebarArticles}
                isSmall={true}
              />
            </Grid>

            <Grid sx={{ mb: 3 }} size="grow">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {NewsGridComponent}
              </Box>
            </Grid>
          </>
        ) : (
          <>
            {/* Placeholder for "Latest news" / "Tin mới nhất" */}
            <Grid sx={{ mb: 3 }} size={{ md: 4}}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {NewsGridComponent}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <ArticleCard article={mainArticle} variant="main" />
            </Grid>

            {/* List of other articles (responsive: full width on mobile, half on tablet/desktop) */}
            <SidebarArticlesSection
              listArticles={sidebarArticles}
              isSmall={isSmall}
            />

            <Grid sx={{ mt: 3, display: { xs: "block", md: "none" } }} size={{ md: 4}}>
              <Box>
                {NewsGridComponent}
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
