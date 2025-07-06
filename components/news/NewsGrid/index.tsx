import { Grid, Container, Typography, Box } from "@mui/material";
import { NewsArticle } from "@/lib/types";
import NewsCard from "@/components/news/NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
  title?: string;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export function NewsGrid({
  articles,
  title = "Tin tức mới nhất",
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
}: NewsGridProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {title && (
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: 60,
                height: 3,
                bgcolor: "primary.main",
                borderRadius: 1.5,
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid
            // item
            // xs={columns.xs || 12}
            // sm={columns.sm || 6}
            // md={columns.md || 4}
            // lg={columns.lg || 3}
            key={article.id}
            component="div"
          >
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
