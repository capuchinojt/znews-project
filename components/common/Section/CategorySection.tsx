import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Link from "next/link";
import { NewsGrid } from "../../news/NewsGrid/NewsGrid";
import ArticleCard from "../../news/Article/ArticleCard";
import type { Article } from "@/lib/types/newsComponents";

interface CategorySectionProps {
  title: string;
  articles: Article[];
  categorySlug?: string;
  navItems?: string[];
  showNavigation?: boolean;
  showDescription?: boolean;
  maxSidebarArticles?: number;
}

export default function CategorySection({
  title,
  articles,
  showNavigation = true,
  showDescription = true,
  maxSidebarArticles = 4,
}: CategorySectionProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Main article (first one) displayed on the left
  const mainArticle = articles[0];
  const subArticles = articles.slice(1, 3);
  // Remaining articles for the sidebar grid on the right
  const sidebarArticles = articles.slice(2, maxSidebarArticles + 3);

  return (
    <Box
      sx={{
        mb: 1,
        pb: 1,
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 3 }}>
        {/* Category Title */}
        <Link href={`/kinh-doanh`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              pl: 1,
              mb: showNavigation ? 2 : 0,
              textTransform: "uppercase",
              borderBottom: "1px solid #86879177",
            }}
          >
            / {title}
          </Typography>
        </Link>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={{ lg: 1 }}>
        {/* Main Article on the Left */}
        <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Link
              href={mainArticle.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  maxHeight: 460,
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={mainArticle.imageUrl}
                  alt={mainArticle.title}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    maxHeight: 346,
                  }}
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "#1a1a1a",
                      mb: showDescription ? 1.5 : 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {mainArticle.title}
                  </Typography>
                  {showDescription && mainArticle.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {mainArticle.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
          >
            {/* Mobile view: Display subArticles with ArticleCard */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Grid
                size="grow"
                container
                spacing={{ xs: 2 }}
              >
                {subArticles.slice(0, 2).map((subArticle) => (
                  <Grid key={subArticle.id} size={{ xs: 6 }}>
                    <ArticleCard article={subArticle} variant="small" />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Desktop view: Display subArticles with NewsGrid */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NewsGrid
                articles={subArticles}
                columns={{ xs: 6, sm: 12, md: 12 }}
                variant="vertical"
                isDisplayDescription={false}
                border={false}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Sidebar Articles on the Right */}
        <Grid size={{ xs: 12, md: 3 }} sx={{ mt: { xs: 4, md: 0 } }}>
          <NewsGrid
            articles={sidebarArticles}
            variant="horizontal"
            side="right" // Position of image relative to content
            columns={{ md: 12, lg: 12 }}
            isDisplayDescription={false}
            customDimensions={{
              horizontal: {
                imageWidth: 70,
                imageHeight: 50,
                minHeight: 50,
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
