import React from 'react';
import { Box, Typography, Card, IconButton } from '@mui/material';
import Link from 'next/link';

interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  category: 'TL;DR' | 'MINI MAGAZINE' | 'LONGFORM' | 'STORY';
  description?: string;
}

interface MagazineCardProps {
  magazine: MagazineItem;
}

const getCategoryColor = (category: MagazineItem['category']) => {
  switch (category) {
    case 'TL;DR':
      return '#FFD700'; // Gold
    case 'MINI MAGAZINE':
      return '#FFD700'; // Gold
    case 'LONGFORM':
      return '#FFD700'; // Gold
    case 'STORY':
      return '#FFD700'; // Gold
    default:
      return '#FFD700';
  }
};

export default function MagazineCard({ magazine }: MagazineCardProps) {
  return (
    <Link
      href={magazine.link}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card
        sx={{
          position: 'relative',
          height: 400,
          borderRadius: 2,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            '& .magazine-image': {
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        {/* Background Image */}
        <Box
          className="magazine-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${magazine.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.3s ease',
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Category Tag */}
        <Box
          sx={{
            position: 'absolute',
            top: -1,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: getCategoryColor(magazine.category),
            color: '#000',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            fontWeight: 'bold',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: 'max-content',
          }}
        >
          {magazine.category}
        </Box>

        {/* Content */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 180, // Fixed height for content area
          }}
        >
          {/* Progress Bar */}
          <Box
            sx={{
              width: 60,
              height: 3,
              backgroundColor: '#FFD700',
              borderRadius: 1.5,
              mb: 2,
              flexShrink: 0, // Prevent shrinking
            }}
          />

          {/* Title - Takes remaining space */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              component="h3"
              sx={{
                fontWeight: 'bold',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                textAlign: 'center',
                width: '100%',
              }}
            >
              {magazine.title}
            </Typography>
          </Box>

          {/* Icon - Fixed at bottom */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 1,
              color: '#FFD700',
              flexShrink: 0, // Prevent shrinking
            }}
          >
            <Box
              component="span"
              sx={{
                width: 20,
                height: 15,
                border: '2px solid currentColor',
                borderRadius: 0.5,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 6,
                  border: '1px solid currentColor',
                  borderRadius: 0.25,
                },
              }}
            />
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
