import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ArticleCard from "@/components/common/ArticleCard";
import { NewsGrid } from "@/components/news/NewsGrid/NewsGrid";
import { Article } from "@/lib/types";

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
  const mainArticle = articles[0];
  const listArticles = articles.slice(4); // Remaining for the list

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} >
        {isMd ? (
          <>
            {/* mainArticle trước */}
            <Grid size={{ xs: 12, md: 7 }}>
              {mainArticle && (
                <ArticleCard article={mainArticle} variant="main" />
              )}
            </Grid>

            <Grid sx={{ mb: 3 }} size="grow">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <NewsGrid
                  articles={listArticles}
                  variant="horizontal"
                  columns={{ md: 12, lg: 12 }}
                />
              </Box>
            </Grid>
          </>
        ) : (
          <>
            {/* Placeholder for "Latest news" / "Tin mới nhất" */}
            <Grid sx={{ mb: 3 }} size={{ md: 4}}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <NewsGrid
                  articles={listArticles}
                  variant="horizontal"
                  columns={{ md: 12, lg: 12 }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              {mainArticle && (
                <ArticleCard article={mainArticle} variant="main" />
              )}
            </Grid>

            {/* List of other articles (responsive: full width on mobile, half on tablet/desktop) */}
            <Grid size="grow" container spacing={3}>
              {listArticles.slice(0, 2).map((article) =>
                isSmall ? (
                  <Grid key={article.id} size={{ xs: 6 }}>
                    <ArticleCard article={article} variant="small" />
                  </Grid>
                ) : (
                  <Grid key={article.id} size={{ sm: 12 }}>
                    <ArticleCard article={article} variant="sidebar" />
                  </Grid>
                )
              )}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
