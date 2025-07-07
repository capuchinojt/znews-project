import { Grid, Container, Typography, Box } from "@mui/material";
import { Article } from "@/lib/types";
import NewsCard from "../NewsCard/NewsCard";

interface NewsGridProps {
  articles: Article[];
  title?: string;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  variant?: "horizontal" | "vertical";
}

export function NewsGrid({
  articles,
  title,
  columns = { xs: 12, sm: 6, md: 4, lg: 3 },
  variant = "vertical",
}: NewsGridProps) {
  const isVertical = variant === "vertical";
  const columnsSetting = isVertical ? {
    md: 12
  } : {
    xs: columns.xs || 12,
    sm: columns.sm || (isVertical ? 6 : 12),
    md: columns.md || (isVertical ? 4 : 6),
    lg: columns.lg || (isVertical ? 3 : 4),
  }
  return (
    <Box>
      {title && (
        <Box sx={{ mb: 2 }}>
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

      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid
            size={columnsSetting}
            key={article.id}
            component="div"
          >
            <NewsCard article={article} variant={variant} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
