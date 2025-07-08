import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import ArticleCard from '@/components/news/Article/ArticleCard';

interface MultimediaArticle {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  link: string;
}

interface MultimediaSectionProps {
  articles: MultimediaArticle[];
}

export default function MultimediaSection({ articles }: MultimediaSectionProps) {
  // Assuming the first article is the main one on the left
  const mainMultimediaArticle = articles[0];
  // The next four articles are the smaller ones on the right
  const smallMultimediaArticles = articles.slice(1, 5);

  const navItems = ['VIDEO', 'PODCAST', 'LONGFORM', 'STORY', 'QUIZZ'];

  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        pt: 4,
        px: 4,
        pb: 4,
        bgcolor: "#FFDE76",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2} sx={{ mb: 1 }}>
        {/* Header with / MULTIMEDIA */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", borderLeft: "4px solid #dd0000", pl: 1 }}
        >
          / MULTIMEDIA
        </Typography>

        {/* Navigation Tabs */}
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 }, // Gap between buttons
            mb: 1,
            px: 0.5, // Small padding to align with grid content
          }}
        >
          {navItems.map((item) => (
            <Link key={item} href={`/multimedia/${item.toLowerCase()}`}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    color: "primary.main",
                  },
                }}
              >
                {item}
              </Typography>
            </Link>
          ))}
        </Box>
      </Grid>

      {/* Content Grid */}
      <Grid container spacing={2}>
        {/* Main multimedia article on the left */}
        {mainMultimediaArticle && (
          <Grid size={{ xs: 12, md: 6 }}>
            <ArticleCard
              article={mainMultimediaArticle}
              variant="main"
              sx={{ bgcolor: "#FFDE76" }}
            />
          </Grid>
        )}

        {/* Smaller multimedia articles on the right */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {smallMultimediaArticles.map((article) => (
              <Grid size={{ xs: 6, md: 6 }} key={article.id}>
                {" "}
                {/* 2 columns on small screens, 1 on extra small */}
                {/* Adjust styles for small multimedia cards */}
                <ArticleCard
                  article={article}
                  variant="small" // Use the 'small' variant for these cards
                  // You might need to override some specific styles if 'small' variant isn't exactly what you need
                  sx={{
                    ".MuiCardMedia-root": {
                      height: "140px !important", // Override height if needed for this section specifically
                      minHeight: "140px !important",
                      maxHeight: "140px !important",
                      "@media (min-width:600px)": {
                        height: "120px !important",
                        minHeight: "120px !important",
                        maxHeight: "120px !important",
                      },
                      "@media (min-width:900px)": {
                        height: "180px !important",
                        minHeight: "180px !important",
                        maxHeight: "180px !important",
                      },
                    },
                    ".MuiTypography-body1": {
                      // Title font size for small cards in this section
                      fontSize: { xs: "0.9rem", sm: "0.85rem", md: "0.8rem" },
                      lineHeight: 1.3,
                      WebkitLineClamp: 3,
                    },
                    bgcolor: "#FFDE76",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}