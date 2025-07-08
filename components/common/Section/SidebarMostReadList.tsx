import Grid from "@mui/material/Grid";

import { Article } from "@/lib/types";
import NewsCard from "@/components/news/NewsCard/NewsCard";
import { Box } from "@mui/material";

export default function MostReadListSidebar({
  articles,
  title = "Đọc nhiều",
}: {
  articles: Article[];
  title?: string;
}) {
  const customDimensions = {
    horizontal: {
      imageWidth: 80,
      imageHeight: 60,
      minHeight: 50,
    },
  };
  return (
    <Box sx={{ border: "1px solid #eee", borderRadius: 1, p: 2 }}>
      {title && (
        <Box sx={{ mb: 2, fontWeight: "bold" }}>
          {title}
        </Box>
      )}
      <Grid size="grow" container spacing={{ xs: 2, sm: 3, md: 2, lg: 0 }}>
        {articles.slice(0, 5).map((article) => (
          <Grid key={article.id} size={{ md: 12 }}>
            <NewsCard
              article={article}
              variant="horizontal"
              isDisplayDescription={false}
              customDimensions={customDimensions}
              border={false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
