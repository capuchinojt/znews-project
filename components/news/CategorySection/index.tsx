"use client";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  Chip,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  Newspaper, 
  Public, 
  TrendingUp, 
  Computer,
  Sports,
  TheaterComedy,
  ArrowForward
} from '@mui/icons-material';
import { Category, NewsArticle } from '@/lib/types';
import NewsCard from '@/components/news/NewsCard';
import React from 'react';

interface CategorySectionProps {
  categories: Category[];
  articlesByCategory?: { [key: string]: NewsArticle[] };
}

const iconMap: { [key: string]: any } = {
  'newspaper': Newspaper,
  'globe': Public,
  'trending-up': TrendingUp,
  'cpu': Computer,
  'zap': Sports,
  'music': TheaterComedy,
};

export function CategorySection({ categories, articlesByCategory = {} }: CategorySectionProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            Chuyên mục
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Khám phá tin tức theo từng lĩnh vực
          </Typography>
        </Box>

        {/* Category Navigation */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Newspaper;
            const articlesCount = articlesByCategory[category.slug]?.length || 0;
            
            return (
              <Grid item xs={6} sm={4} md={2} key={category.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      borderColor: category.color,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 24px ${category.color}20`
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: category.color,
                        mb: 2,
                        mx: 'auto',
                        width: 48,
                        height: 48
                      }}
                    >
                      <IconComponent />
                    </Avatar>
                    
                    <Typography 
                      variant="subtitle1" 
                      component="h3"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {category.name}
                    </Typography>
                    
                    <Chip
                      label={`${articlesCount} bài viết`}
                      size="small"
                      variant="outlined"
                      sx={{ 
                        fontSize: '0.75rem',
                        borderColor: category.color,
                        color: category.color
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Featured Articles by Category */}
        {Object.entries(articlesByCategory).map(([categorySlug, articles]) => {
          const category = categories.find(cat => cat.slug === categorySlug);
          if (!category || !articles.length) return null;

          return (
            <Box key={categorySlug} sx={{ mb: 6 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: category.color,
                      width: 32,
                      height: 32
                    }}
                  >
                    {React.createElement(iconMap[category.icon] || Newspaper, { 
                      sx: { fontSize: 18 } 
                    })}
                  </Avatar>
                  {category.name}
                </Typography>
                
                <IconButton
                  sx={{
                    color: category.color,
                    '&:hover': {
                      bgcolor: `${category.color}10`
                    }
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Box>

              <Grid container spacing={3}>
                {articles.slice(0, 4).map((article) => (
                  <Grid item xs={12} sm={6} md={3} key={article.id}>
                    <NewsCard article={article} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
export default CategorySection;
