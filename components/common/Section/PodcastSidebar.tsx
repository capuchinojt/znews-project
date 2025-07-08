import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";

interface PodcastItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
}

interface PodcastSidebarProps {
  podcasts: PodcastItem[];
  title?: string;
  isDisplayDescription?: boolean;
}

export default function PodcastSidebar({
  podcasts,
  title = "PODCAST",
  isDisplayDescription = false,
}: PodcastSidebarProps) {
  if (!podcasts || podcasts.length === 0) {
    return null;
  }

  const mainPodcast = podcasts[0];
  const otherPodcasts = podcasts.slice(1, 4); // Show up to 4 additional podcasts

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #8B4513 0%, #4682B4 100%)",
        p: 2,
        color: "white",
        mt: 3,
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 1,
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
        }}
      >
        {title}
      </Typography>

      {/* Main Podcast Item */}
      <Link
        href={mainPodcast.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            mb: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={mainPodcast.imageUrl}
            alt={mainPodcast.title}
            sx={{
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <CardContent sx={{ p: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.4,
                color: "white",
                textAlign: "center",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {mainPodcast.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>

      {/* Other Podcast Items */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {otherPodcasts.map((podcast) => (
          <Link
            key={podcast.id}
            href={podcast.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
                backdropFilter: "blur(10px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 1,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  transform: "translateX(4px)",
                },
              }}
            >
              {/* Podcast Image */}
              <CardMedia
                component="img"
                image={podcast.imageUrl}
                alt={podcast.title}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 1,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />

              {/* Podcast Content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {podcast.title}
                </Typography>
                {isDisplayDescription && podcast.description && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      mt: 0.5,
                      display: "block",
                      lineHeight: 1.2,
                    }}
                  >
                    {podcast.description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
