import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { SxProps, Theme } from "@mui/material/styles";

// Constants for better maintainability
const CARD_HEIGHTS = {
  main: 300,
  sidebar: 180,
  small: 120,
} as const;

const TEXT_VARIANTS = {
  main: "h5",
  sidebar: "body2",
  small: "body1",
} as const;

const LINE_CLAMPS = {
  main: 3,
  sidebar: 3,
  small: 2,
} as const;

const LINE_HEIGHTS = {
  main: 1.3,
  sidebar: 1.4,
  small: 1.4,
} as const;

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    category?: string;
    link: string;
  };
  variant?: "main" | "sidebar" | "small";
  sx?: SxProps<Theme>;
}

export default function ArticleCard({
  article,
  variant = "main",
  sx,
}: ArticleCardProps) {
  // Early return for missing required data
  if (!article?.title || !article?.imageUrl || !article?.link) {
    console.warn("ArticleCard: Missing required article data");
    return null;
  }

  // Improved logic flow with constants
  const cardHeight = CARD_HEIGHTS[variant];
  const textVariant = TEXT_VARIANTS[variant];
  const lineClamp = LINE_CLAMPS[variant];
  const lineHeight = LINE_HEIGHTS[variant];

  // Cleaner media styles calculation
  const getCardMediaStyles = (): SxProps<Theme> => {
    const baseStyles: SxProps<Theme> = {
      objectFit: "cover",
      width: "100%",
      height: cardHeight,
    };

    // Add additional constraints for small and sidebar variants to ensure consistent sizes
    if (variant === "small" || variant === "sidebar") {
      return {
        ...baseStyles,
        minHeight: cardHeight,
        maxHeight: cardHeight,
      };
    }

    return baseStyles;
  };

  // Improved sx merging logic
  const getCardStyles = (): SxProps<Theme> => {
    const baseStyles: SxProps<Theme> = {
      display: "flex",
      flexDirection: "column",
      mb: 0,
      boxShadow: "none",
      borderRadius: 0,
      cursor: "pointer",
      transition: "color 0.2s ease-in-out", // Smooth transition
      "&:hover": {
        color: "#006BA0",
      },
    };

    // Safe merge with user-provided sx
    return sx ? { ...baseStyles, ...sx } : baseStyles;
  };

  // Memoized text truncation styles to avoid recreation
  const textTruncationStyles: SxProps<Theme> = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };

  return (
    <Link
      href={article.link}
      passHref
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card sx={getCardStyles()}>
        <CardMedia
          component="img"
          image={article.imageUrl}
          alt={article.title}
          sx={getCardMediaStyles()}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            pt: 1,
            pb: "0 !important",
            px: 0,
            "&:last-child": {
              pb: "0 !important",
            },
          }}
        >
          <Typography
            gutterBottom
            variant={textVariant}
            component="div"
            sx={{
              fontWeight: "bold",
              lineHeight: lineHeight,
              WebkitLineClamp: lineClamp,
              ...textTruncationStyles,
            }}
          >
            {article.title}
          </Typography>
          {variant === "main" && article.description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1,
                WebkitLineClamp: 3,
                ...textTruncationStyles,
                display: { xs: "none", md: "none", lg: "-webkit-box" },
              }}
            >
              {article.description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
