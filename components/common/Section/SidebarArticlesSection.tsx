import Grid from "@mui/material/Grid";

import ArticleCard from "@/components/news/Article/ArticleCard";
import { Article } from "@/lib/types";

export default function SidebarArticlesSection({
  listArticles,
  isSmall,
}: {
  listArticles: Article[];
  isSmall?: boolean;
}) {
  return (
    <Grid
      size="grow"
      container
      spacing={{ xs: 2, sm: 3, md: 2, lg: 0 }}
      sx={{
        height: { lg: "280px" },
      }}
    >
      {listArticles.slice(0, 2).map((article) =>
        isSmall ? (
          <Grid key={article.id} size={{ xs: 6 }}>
            <ArticleCard article={article} variant="small" />
          </Grid>
        ) : (
          <Grid key={article.id} size={{ sm: 6, md: 12 }}>
            <ArticleCard article={article} variant="sidebar" />
          </Grid>
        )
      )}
    </Grid>
  );
}
