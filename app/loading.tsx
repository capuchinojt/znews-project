import React from 'react';
import { Box, Skeleton, Container } from '@mui/material';

export default function Loading() {
  return (
    <Box>
      {/* Header Skeleton */}
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ py: 2 }}>
            <Skeleton variant="rectangular" width={120} height={40} />
          </Box>
        </Container>
        <Box sx={{ height: { xs: 56, md: 64 } }} />
      </Box>

      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, sm: 3 } }}>
        {/* Featured Section Skeleton */}
        <Box sx={{ my: 4 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="rectangular" width="100%" height={300} />
              <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: 1 }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </Box>
            <Box sx={{ width: 300 }}>
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Skeleton variant="rectangular" width={100} height={80} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Book Carousel Skeleton */}
        <Box sx={{ my: 4 }}>
          <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} variant="rectangular" width={150} height={200} />
            ))}
          </Box>
        </Box>

        {/* Magazine Carousel Skeleton */}
        <Box sx={{ my: 4 }}>
          <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            {[1, 2, 3].map((item) => (
              <Skeleton key={item} variant="rectangular" width={300} height={400} />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Multimedia Section Skeleton */}
      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 0, sm: 0 } }}>
        <Box sx={{ px: { xs: 2, sm: 3 } }}>
          <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 2 }} />
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
            {[1, 2, 3, 4].map((item) => (
              <Box key={item}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', mt: 1 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Category Sections Skeleton */}
      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, sm: 3 } }}>
        {[1, 2].map((section) => (
          <Box key={section} sx={{ mb: 4 }}>
            <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 2 }} />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
              {[1, 2, 3].map((item) => (
                <Box key={item}>
                  <Skeleton variant="rectangular" width="100%" height={150} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', mt: 1 }} />
                  <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
