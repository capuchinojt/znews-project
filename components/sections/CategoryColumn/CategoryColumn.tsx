import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import Link from "next/link";

import type { Article } from "@/lib/types";

interface CategoryColumnProps {
  title: string;
  articles: Article[];
  categorySlug?: string;
}

export default function CategoryColumn({
  title,
  articles,
  categorySlug = "",
}: CategoryColumnProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const displayArticles = articles.slice(0, 3);
  const mainArticle = displayArticles[0];
  const sideArticles = displayArticles.slice(1);

  return (
    <Box sx={{ height: "100%" }}>
      {/* Category Title */}
      <Box sx={{ mb: 2 }}>
        <Link
          href={`/${categorySlug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              pb: 0.5,
              mb: 2,
            }}
          >
            <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
              /
            </span>{" "}{title}
          </Typography>
        </Link>
      </Box>

      {/* Main Article */}
      <Link
        href={mainArticle.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            mb: 1,
            cursor: "pointer",
            transition: "all 0.3s ease",
            overflow: "hidden",
            boxShadow: "none",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
            minHeight: 220,
          }}
        >
          <CardMedia
            component="img"
            height="150"
            image={mainArticle.imageUrl}
            alt={mainArticle.title}
            sx={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              maxHeight: 140,
              minHeight: 140,
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
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontSize: "0.95rem",
              }}
            >
              {mainArticle.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>

      {/* Side Articles */}
      <Stack spacing={1.5}>
        {sideArticles.map((article) => (
          <Link
            key={article.id}
            href={article.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                p: 1,
                borderRadius: 1,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f8f9fa",
                  transform: "translateX(4px)",
                },
                borderTop: "1px solid #e0e0e0",
              }}
            >
              {/* Article Image */}
              <CardMedia
                component="img"
                image={article.imageUrl}
                alt={article.title}
                sx={{
                  width: 80,
                  height: 60,
                  borderRadius: 1,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />

              {/* Article Content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "#333",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontSize: "0.85rem",
                  }}
                >
                  {article.title}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
