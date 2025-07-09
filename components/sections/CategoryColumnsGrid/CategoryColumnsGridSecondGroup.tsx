import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import CategoryColumn from '../CategoryColumn';
import type { Article } from '@/lib/types';

interface CategoryColumnsGridSecondGroupProps {
  entertainmentArticles: Article[];
  sportsArticles: Article[];
  societyArticles: Article[];
  lawArticles: Article[];
}

export default function CategoryColumnsGridSecondGroup({
  entertainmentArticles,
  sportsArticles,
  societyArticles,
  lawArticles,
}: CategoryColumnsGridSecondGroupProps) {
  const categories = [
    {
      title: 'GIẢI TRÍ',
      articles: entertainmentArticles,
      categorySlug: 'giai-tri',
    },
    {
      title: 'THỂ THAO',
      articles: sportsArticles,
      categorySlug: 'the-thao',
    },
    {
      title: 'XÃ HỘI',
      articles: societyArticles,
      categorySlug: 'xa-hoi',
    },
    {
      title: 'PHÁP LUẬT',
      articles: lawArticles,
      categorySlug: 'phap-luật',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
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
