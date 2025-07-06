'use client';
import { 
  Box, 
  Container, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';
import { ArrowForward, AccessTime, Visibility } from '@mui/icons-material';
import { NewsArticle } from '@/lib/types';
import LazyImage from '@/components/common/LazyImage';

interface FeaturedNewsProps {
  articles: NewsArticle[];
}

export function FeaturedNews({ articles }: FeaturedNewsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  if (!mainArticle) return null;

  return (
    <Box sx={{ bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 60,
                height: 3,
                bgcolor: 'secondary.main',
                borderRadius: 1.5
              }
            }}
          >
            Tin nổi bật
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Main Featured Article */}
          <Grid item xs={12} md={8}>
            <Card 
              sx={{ 
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover': {
                  '& .featured-image': {
                    transform: 'scale(1.05)',
                  },
                  '& .featured-overlay': {
                    opacity: 0.8,
                  }
                }
              }}
            >
              <CardMedia sx={{ height: isMobile ? 250 : 400, position: 'relative' }}>
                <LazyImage
                  src={mainArticle.imageUrl}
                  alt={mainArticle.title}
                  width={800}
                  height={400}
                  className="featured-image w-full h-full object-cover transition-transform duration-500"
                  priority
                />
                
                {/* Overlay */}
                <Box
                  className="featured-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%)',
                    opacity: 0.6,
                    transition: 'opacity 0.3s ease'
                  }}
                />
                
                {/* Content Overlay */}
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    color: 'white',
                    background: 'transparent',
                    p: 3
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={mainArticle.category}
                      size="small"
                      sx={{ 
                        bgcolor: 'secondary.main',
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="h4" 
                    component="h1"
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.2,
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {mainArticle.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      opacity: 0.95,
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {mainArticle.summary}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTime sx={{ fontSize: 16 }} />
                      <Typography variant="caption">
                        {mainArticle.readTime} phút đọc
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Visibility sx={{ fontSize: 16 }} />
                      <Typography variant="caption">
                        {mainArticle.views?.toLocaleString()} lượt xem
                      </Typography>
                    </Box>
                    
                    <Typography variant="caption" sx={{ marginLeft: 'auto' }}>
                      {new Date(mainArticle.publishedAt).toLocaleDateString('vi-VN')}
                    </Typography>
                  </Box>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>

          {/* Side Articles */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
              {sideArticles.map((article, index) => (
                <Card 
                  key={article.id}
                  sx={{ 
                    display: 'flex',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardMedia sx={{ width: 120, height: 80, flexShrink: 0 }}>
                    <LazyImage
                      src={article.imageUrl}
                      alt={article.title}
                      width={120}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </CardMedia>
                  
                  <CardContent sx={{ flex: 1, p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography 
                      variant="subtitle2" 
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        lineHeight: 1.3,
                        mb: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {article.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Chip 
                        label={article.category}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem', height: 20 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(article.publishedAt).toLocaleDateString('vi-VN')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
