import { useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

import LazyImage from "@/components/common/LazyImage";
import type {
  CardDimensions,
  NewsCardProps,
} from "@/lib/types/newsComponents";

// Constants for better maintainability - now serving as default values
const CARD_DIMENSIONS = {
  horizontal: {
    imageWidth: 120,
    imageHeight: 80,
    minHeight: 80,
  },
  vertical: {
    imageWidth: "100%",
    imageHeight: 150,
    minHeight: 100,
  },
} as const;

const TEXT_CLAMP_LINES = {
  title: 3,
  description: 3,
} as const;

export default function NewsCard({
  article,
  isDisplayDescription = true,
  variant = "vertical",
  border = true,
  customDimensions,
  responsiveDimensions,
  side = "left", // Default image position is left
}: NewsCardProps) {
  // Early return for missing required data
  if (!article?.title || !article?.imageUrl || !article?.link) {
    console.warn("NewsCard: Missing required article data");
    return null;
  }

  const isHorizontal = variant === "horizontal";
  const imageOnRight = isHorizontal && side === "right";

  // Merge default dimensions with custom dimensions
  const getVariantDimensions = (
    variant: "horizontal" | "vertical"
  ): CardDimensions => {
    const defaultDimensions = CARD_DIMENSIONS[variant];
    const customVariantDimensions = customDimensions?.[variant] || {};

    return {
      ...defaultDimensions,
      ...customVariantDimensions,
    };
  };

  const dimensions = getVariantDimensions(variant);

  // Create responsive media styles
  const createResponsiveMediaStyles = (): SxProps<Theme> => {
    const baseStyles: SxProps<Theme> = {
      width: "100%",
      height: dimensions.imageHeight, // Fixed height instead of maxHeight
      minHeight: dimensions.minHeight,
      aspectRatio: isHorizontal ? "3/2" : "16/9", // Maintain consistent aspect ratio
      flexShrink: 0, // Prevent image from shrinking
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      },
    };

    // Add responsive dimensions if provided
    if (responsiveDimensions) {
      const responsiveStyles: any = {};

      Object.entries(responsiveDimensions).forEach(([breakpoint, dims]) => {
        if (dims) {
          const mergedDims = { ...dimensions, ...dims };
          responsiveStyles[breakpoint] = {
            width: "100%",
            height: mergedDims.imageHeight,
            minHeight: mergedDims.minHeight,
          };
        }
      });

      return { ...baseStyles, ...responsiveStyles };
    }

    return baseStyles;
  };

  // Memoize styles to avoid recalculation on every render
  const cardStyles = useMemo(
    (): SxProps<Theme> => ({
      height: "90%",
      display: "flex",
      flexDirection: "column", // Always column since Grid handles the layout
      cursor: "pointer",
      alignContent: "center",
      boxShadow: "none",
      ...(border && { borderBottom: "1.5px solid #eee" }), // Only show border when border is true
      borderRadius: 0,
      pb: 3,
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        color: "#006BA0",
      },
    }),
    [border]
  );

  const mediaStyles = useMemo(
    (): SxProps<Theme> => createResponsiveMediaStyles(),
    [dimensions, responsiveDimensions]
  );

  // Memoized text truncation styles
  const textTruncationStyles = useMemo(
    (): SxProps<Theme> => ({
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    []
  );

  const titleStyles = useMemo(
    (): SxProps<Theme> => ({
      fontWeight: 600,
      WebkitLineClamp: TEXT_CLAMP_LINES.title,
      lineHeight: 1.4,
      mb: 1,
      ...textTruncationStyles,
    }),
    [textTruncationStyles]
  );

  const descriptionStyles = useMemo(
    (): SxProps<Theme> => ({
      WebkitLineClamp: TEXT_CLAMP_LINES.description,
      lineHeight: 1.3,
      ...textTruncationStyles,
    }),
    [textTruncationStyles]
  );

  return (
    <Link
      href={article.link}
      passHref
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card sx={cardStyles}>
        <Grid container spacing={1} sx={{ height: "100%" }}>
          {/* Conditional rendering based on side prop */}
          {imageOnRight ? (
            <>
              {/* Content Column - Left side when image is on right */}
              <Grid
                size={isHorizontal ? 8 : 12}
                sx={{
                  flex: 1,
                  minWidth: 0, // Allows text truncation to work properly
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    p: 1,
                    pt: 0,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    "&:last-child": {
                      pb: 1,
                      pt: 0,
                    },
                  }}
                >
                  <Typography variant="caption" component="h3" sx={titleStyles}>
                    {article.title}
                  </Typography>

                  {isDisplayDescription && article.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={descriptionStyles}
                    >
                      {article.description}
                    </Typography>
                  )}
                </CardContent>
              </Grid>

              {/* Image Column - Right side */}
              <Grid
                size={isHorizontal ? 4 : 12}
                sx={{
                  flexShrink: 0,
                  width: isHorizontal
                    ? `${
                        typeof dimensions.imageWidth === "number"
                          ? dimensions.imageWidth
                          : 120
                      }px`
                    : "100%",
                  maxWidth: isHorizontal
                    ? `${
                        typeof dimensions.imageWidth === "number"
                          ? dimensions.imageWidth
                          : 120
                      }px`
                    : "100%",
                }}
              >
                <CardMedia
                  sx={{
                    ...mediaStyles,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <LazyImage
                    src={article.imageUrl}
                    alt={article.title}
                    width={
                      typeof dimensions.imageWidth === "number"
                        ? dimensions.imageWidth
                        : 400
                    }
                    height={dimensions.imageHeight}
                    className="w-full h-full object-cover"
                  />
                </CardMedia>
              </Grid>
            </>
          ) : (
            <>
              {/* Image Column - Left side (default) */}
              <Grid
                size={isHorizontal ? 4 : 12}
                sx={{
                  flexShrink: 0,
                  width: isHorizontal
                    ? `${
                        typeof dimensions.imageWidth === "number"
                          ? dimensions.imageWidth
                          : 120
                      }px`
                    : "100%",
                  maxWidth: isHorizontal
                    ? `${
                        typeof dimensions.imageWidth === "number"
                          ? dimensions.imageWidth
                          : 120
                      }px`
                    : "100%",
                }}
              >
                <CardMedia
                  sx={{
                    ...mediaStyles,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <LazyImage
                    src={article.imageUrl}
                    alt={article.title}
                    width={
                      typeof dimensions.imageWidth === "number"
                        ? dimensions.imageWidth
                        : 400
                    }
                    height={dimensions.imageHeight}
                    className="w-full h-full object-cover"
                  />
                </CardMedia>
              </Grid>

              {/* Content Column - Right side (default) */}
              <Grid
                size={isHorizontal ? 8 : 12}
                sx={{
                  flex: 1,
                  minWidth: 0, // Allows text truncation to work properly
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    p: 1,
                    pt: 0,
                    px: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    "&:last-child": {
                      pb: 1,
                      pt: 0,
                    },
                  }}
                >
                  <Typography variant="caption" component="h3" sx={titleStyles}>
                    {article.title}
                  </Typography>

                  {isDisplayDescription && article.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={descriptionStyles}
                    >
                      {article.description}
                    </Typography>
                  )}
                </CardContent>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </Link>
  );
}
