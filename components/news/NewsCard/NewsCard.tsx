import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Article } from "@/lib/types";
import LazyImage from "@/components/common/LazyImage";
import Link from "next/link";

interface NewsCardProps {
  article: Article;
  variant?: "horizontal" | "vertical";
}

export default function NewsCard({
  article,
  variant = "vertical",
}: NewsCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <Link
      href={article.link}
      passHref
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        sx={{
          height: "90%",
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          cursor: "pointer",
          alignContent: "center",
          boxShadow: 'none',
          borderBottom: '1.5px solid #eee',
          borderRadius: 0,
          '&:hover': {
            color: '#006BA0'
          },
        }}
      >
        <CardMedia
          sx={{
            width: isHorizontal ? 120 : "100%",
            height: isHorizontal ? 80 : 150,
            minHeight: isHorizontal ? 100 : 100,
          }}
        >
          <LazyImage
            src={article.imageUrl}
            alt={article.title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </CardMedia>

        <CardContent sx={{ flex: 1, p: 1 }}>
          <Typography
            variant="caption"
            component="h3"
            sx={{
              fontWeight: 600,
              display: "-webkit-box",
              WebkitLineClamp: 3,
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
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.summary}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
