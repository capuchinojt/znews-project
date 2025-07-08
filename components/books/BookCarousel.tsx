// components/BookCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

import { Book } from '@/lib/types';
import BookItemCard from './BookItemCard';

interface BookCarouselProps {
  books: Book[];
}

export default function BookCarousel({ books }: BookCarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Up to 599px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px to 899px
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // 900px and up

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5); // Default for desktop
  const [itemSize, setItemSize] = useState(0); // Size of each item in pixels

  useEffect(() => {
    if (isDesktop) {
      setItemsToShow(5);
    } else if (isTablet) {
      setItemsToShow(3);
    } else { // Mobile
      setItemsToShow(2);
    }
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    setItemSize(12 / itemsToShow);
  }, [itemsToShow]); // Re-render when books change


  const totalItems = books.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Generate the items to display based on currentIndex and itemsToShow
  const getItemsToDisplay = () => {
    const displayedItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      displayedItems.push(books[(currentIndex + i) % totalItems]);
    }
    return displayedItems;
  };

  if (totalItems === 0) {
    return null; // Don't render if no books
  }

  return (
    <Box sx={{ mt: 1, mb: 5, position: 'relative', overflow: 'hidden' }}>
      <Link href="/books" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', borderBottom: '1px solid #eee', pl: 1, pb: 1, mb: 3 }}>
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>/</span> BOOKS
        </Typography>
      </Link>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: { sm: 'flex' }, // Hide on smallest mobile screens for more space
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Carousel Items */}
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {getItemsToDisplay().map((book) => (
            <Grid size={{ xs: itemSize }} key={book.id}>
              <BookItemCard book={book} />
            </Grid>
          ))}
        </Grid>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: { sm: 'flex' }, // Hide on smallest mobile screens
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}