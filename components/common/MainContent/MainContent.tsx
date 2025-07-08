import { NewsGrid } from "@/components/news/NewsGrid/NewsGrid";
import { Box, Grid } from "@mui/material";

import SidebarArticlesSection from "../Section/SidebarArticlesSection";
import AdvContent from "../AdvContent/AdvContent";
import MostReadListSidebar from "../Section/SidebarMostReadList";
import PodcastSidebar from "../Section/PodcastSidebar";
import { mockPodcastData } from "@/lib/data/mockPodcast";

export default function MainContent({
  articles,
  hashtags,
  title = "",
}: {
  title?: string;
  articles: any[];
  hashtags?: string[];
}) {
  return (
    <Grid container spacing={1} sx={{ mb: 5 }}>
      <Grid size={{ xs: 12, md: 9 }}>
        <NewsGrid
          articles={articles}
          variant="horizontal"
          columns={{ md: 12, lg: 12 }}
          customDimensions={{
            horizontal: { imageHeight: 150, imageWidth: 200, minHeight: 150 },
          }}
        />
      </Grid>
      <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={{ padding: 1, borderRadius: 1, height: 150 }}>
          <AdvContent />
          <MostReadListSidebar articles={articles} />
          <PodcastSidebar podcasts={mockPodcastData} />
        </Box>
      </Grid>
    </Grid>
  );
}
