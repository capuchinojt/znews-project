import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { NewsArticle } from "@/lib/types";
import LazyImage from "@/components/common/LazyImage";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "horizontal" | "vertical";
}

export default function NewsCard({
  article,
  variant = "vertical",
}: NewsCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{
          width: isHorizontal ? "40%" : "100%",
          height: isHorizontal ? "auto" : 240,
          minHeight: isHorizontal ? 120 : 240,
        }}
      >
        <LazyImage
          src={article.imageUrl}
          alt={article.title}
          width={400}
          height={240}
          className="w-full h-full object-cover"
        />
      </CardMedia>

      <CardContent sx={{ flex: 1, p: 2 }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={article.category}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1,
            fontWeight: 600,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.summary}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {article.author} • {article.readTime} phút đọc
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
