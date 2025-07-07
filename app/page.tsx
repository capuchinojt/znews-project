import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ArticleCard from "@/components/common/ArticleCard";
import Header from "@/components/common/Header";
import { NewsGrid } from "@/components/news/NewsGrid/NewsGrid";
import { Article } from "@/lib/types";
import HashtagList from "@/components/common/Hashtags/HashtagList";
import { hashtags } from "@/lib/data/mockNews";
import HotNewsLayout from "@/components/news/HotNews/HotNewsLayout";

// Function to fetch articles - executed on the server side
async function getArticles(): Promise<Article[]> {
  // Call the internal API route
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/articles`,
    {
      cache: "no-store", // Always re-fetch data on each request to ensure SSR
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}

export default async function Home() {
  const articles = await getArticles();

  // Assuming the first article is the main one, and others are sidebar/list
  const sidebarArticles = articles.slice(1, 4); // Next 3 for sidebar
  const listArticles = articles.slice(4); // Remaining for the list

  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {/* Header Section */}
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Header />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, sm: 3 } }}>
        <HashtagList hashtags={hashtags} />
        {/* Main Content Area */}
        <HotNewsLayout articles={articles} />

        {/* Sidebar */}
        <Grid sx={{ xs: 12, md: 4 }}>
          {/* Placeholder for "Featured News" / "Nổi bật" */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                borderLeft: "4px solid #dd0000",
                pl: 1,
              }}
            >
              / NỔI BẬT
            </Typography>
          </Box>
          {sidebarArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="small" />
          ))}
        </Grid>

        <Grid sx={{ xs: 12, md: 12, mt: 4 }}>
          <NewsGrid articles={listArticles} title="Tin tức mới nhất" />
        </Grid>
      </Container>
    </Box>
  );
}
