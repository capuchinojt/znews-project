import React from "react";
import { Container, Grid, Box, Typography, Skeleton } from "@mui/material";
import CategoryColumn from "../CategoryColumn";
import type { CategoryData } from "@/app/api/category-columns/route";

interface CategoryColumnsGridProps {
  groupId: string;
  title?: string;
  categories: CategoryData[];
  loading?: boolean;
  error?: string | null;
  maxArticlesPerColumn?: number;
}

const CategoryColumnsGridBase: React.FC<CategoryColumnsGridProps> = ({
  groupId,
  title,
  categories,
  loading = false,
  error = null,
  maxArticlesPerColumn = 3,
}) => {
  // Loading state
  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {title && (
          <Box sx={{ mb: 3 }}>
            <Skeleton variant="text" width={300} height={40} />
          </Box>
        )}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {[1, 2, 3, 4].map((index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={`skeleton-${index}`}>
              <Box>
                <Skeleton
                  variant="text"
                  width="80%"
                  height={30}
                  sx={{ mb: 2 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="100%"
                  height={20}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="100%"
                  height={20}
                  sx={{ mb: 2 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={60}
                  sx={{ mb: 1 }}
                />
                <Skeleton variant="rectangular" width="100%" height={60} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="error" gutterBottom>
            Lỗi tải dữ liệu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {error}
          </Typography>
        </Box>
      </Container>
    );
  }

  // No data state
  if (!categories || categories.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Không có dữ liệu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hiện tại chưa có bài viết nào trong nhóm này.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {title && (
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "text.primary",
              borderBottom: "2px solid #ef4444",
              paddingBottom: 1,
              display: "inline-block",
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {categories.map((category, index) => (
          <Grid
            size={{ xs: 6, sm: 6, md: 3 }}
            key={`${groupId}-${category.categorySlug}-${index}`}
          >
            <CategoryColumn
              title={category.title}
              articles={category.articles.slice(0, maxArticlesPerColumn)}
              categorySlug={category.categorySlug}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryColumnsGridBase;
