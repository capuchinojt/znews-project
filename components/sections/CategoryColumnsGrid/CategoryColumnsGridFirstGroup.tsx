import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import CategoryColumn from '../CategoryColumn';
import type { Article } from '@/lib/types';

interface CategoryColumnsGridFirstGroupProps {
  technologyArticles: Article[];
  healthArticles: Article[];
  lifestyleArticles: Article[];
  travelArticles: Article[];
  maxArticlesPerColumn?: number;
}

export default function CategoryColumnsGridFirstGroup({
  technologyArticles,
  healthArticles,
  lifestyleArticles,
  travelArticles,
}: CategoryColumnsGridFirstGroupProps) {
  const categories = [
    {
      title: 'CÔNG NGHỆ',
      articles: technologyArticles,
      categorySlug: 'cong-nghe',
    },
    {
      title: 'SỨC KHỎE',
      articles: healthArticles,
      categorySlug: 'suc-khoe',
    },
    {
      title: 'ĐỜI SỐNG',
      articles: lifestyleArticles,
      categorySlug: 'doi-song',
    },
    {
      title: 'DU LỊCH',
      articles: travelArticles,
      categorySlug: 'du-lich',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {categories.map((category) => (
          <Grid size={{ xs: 6, sm: 6, md: 3 }} key={category.title}>
            <CategoryColumn
              title={category.title}
              articles={category.articles}
              categorySlug={category.categorySlug}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
