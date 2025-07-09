"use client";

import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

import MagazineCard from "../MagazineCard";

interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  category: "TL;DR" | "MINI MAGAZINE" | "LONGFORM" | "STORY";
  description?: string;
}

interface MagazineCarouselProps {
  magazines: MagazineItem[];
  title?: string;
}

export default function MagazineCarousel({
  magazines,
  title = "MAGAZINE",
}: MagazineCarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Up to 599px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px to 899px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // 900px and up

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2); // Default for mobile (2 items)
  const [itemSize, setItemSize] = useState(0);

  useEffect(() => {
    if (isDesktop) {
      setItemsToShow(4);
    } else if (isTablet) {
      setItemsToShow(3);
    } else {
      // Mobile - hiển thị 2 items
      setItemsToShow(2);
    }
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    setItemSize(12 / itemsToShow);
  }, [itemsToShow]);

  const totalItems = magazines.length;

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
      displayedItems.push(magazines[(currentIndex + i) % totalItems]);
    }
    return displayedItems;
  };

  if (totalItems === 0) {
    return null; // Don't render if no magazines
  }

  return (
    <Box sx={{ mt: 2, mb: 5, position: "relative", overflow: "hidden" }}>
      {/* Title */}
      <Link
        href="/magazine"
        passHref
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            pb: 1,
            mb: 3,
            color: "#333",
            pl: { xs: 1, sm: 2, md: 8 }
          }}
        >
          <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
            /
          </span>{" "}
          {title}
        </Typography>
      </Link>

      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "2px solid #ddd",
            width: 50,
            height: 50,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,1)",
              borderColor: "#bbb",
              transform: "translateY(-50%) scale(1.1)",
            },
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            display: { xs: "none", sm: "flex" }, // Hide on mobile
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 24, color: "#333" }} />
        </IconButton>

        {/* Carousel Items */}
        <Box sx={{ width: "100%", px: { xs: 0, sm: 8 } }}>
          <Grid container spacing={3}>
            {getItemsToDisplay().map((magazine) => (
              <Grid size={{ xs: itemSize }} key={magazine.id}>
                <MagazineCard magazine={magazine} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "2px solid #ddd",
            width: 50,
            height: 50,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,1)",
              borderColor: "#bbb",
              transform: "translateY(-50%) scale(1.1)",
            },
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            display: { xs: "none", sm: "flex" }, // Hide on mobile
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 24, color: "#333" }} />
        </IconButton>
      </Box>

      {/* Mobile Navigation */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          gap: 2,
          mt: 3,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "2px solid #ddd",
            "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "2px solid #ddd",
            "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
