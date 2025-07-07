import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    category?: string;
    link: string;
  };
  variant?: "main" | "sidebar" | "small";
}

export default function ArticleCard({
  article,
  variant = "main",
}: ArticleCardProps) {
  const isMain = variant === "main";
  const isSmall = variant === "small";

  return (
    <Link
      href={article.link}
      passHref
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2,
          boxShadow: "none",
          borderRadius: 0,
          "&:hover": {
            color: "#006BA0",
          },
        }}
      >
        <CardMedia
          component="img"
          image={article.imageUrl}
          alt={article.title}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: isSmall ? 120 : isMain ? 300 : 180,
            minHeight: isSmall ? 120 : undefined,
            maxHeight: isSmall ? 120 : undefined,
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 1 }}>
          <Typography
            gutterBottom
            variant={isMain ? "h5" : isSmall ? "body1" : "h6"}
            component="div"
            sx={{
              fontWeight: "bold",
              lineHeight: isMain ? 1.3 : 1.4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: isMain ? 3 : isSmall ? 2 : 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </Typography>
          {isMain && article.description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {article.description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
