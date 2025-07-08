import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface MagazineItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
  subtitle?: string;
}

interface MagazineSidebarProps {
  magazines: MagazineItem[];
  title?: string;
  subtitle?: string;
  isDisplayDescription?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function MagazineSidebar({
  magazines,
  title = "HÀNH TRÌNH TỪ TRÁI TIM!",
  subtitle,
  isDisplayDescription = false,
  ctaText = "Xem thêm",
  ctaLink = "#",
}: MagazineSidebarProps) {
  if (!magazines || magazines.length === 0) {
    return null;
  }

  const featuredMagazine = magazines[0];
  const otherMagazines = magazines.slice(1, 3); // Show up to 2 additional magazines

  return (
    <Box
      sx={{
        overflow: "hidden",
        mt: 3,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "0.05em",
            color: "#333",
            mb: subtitle ? 0.5 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Featured Magazine Item */}
      <Link
        href={featuredMagazine.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            position: "relative",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "none",
            borderRadius: 1,
            p: 1,
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={featuredMagazine.imageUrl}
            alt={featuredMagazine.title}
            sx={{
              objectFit: "cover",
            }}
          />

          {/* Overlay with content */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
              color: "white",
              p: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {featuredMagazine.title}
            </Typography>
          </Box>
        </Card>
      </Link>

      {/* Other Magazine Items */}
      <Box>
        <Grid container spacing={1}>
          {otherMagazines.map((magazine, index) => (
            <Grid size={{ md: 6 }} key={magazine.id}>
              <Link
                key={magazine.id}
                href={magazine.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    p: 1,
                    borderTop: index === 0 ? "1px solid #eee" : "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  {/* Magazine Image */}
                  <CardMedia
                    component="img"
                    image={magazine.imageUrl}
                    alt={magazine.title}
                    sx={{
                      width: 150,
                      height: 100,
                      borderRadius: 1,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  {/* Magazine Content */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: "300",
                        color: "#333",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "0.7rem",
                      }}
                    >
                      {magazine.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Link href={ctaLink} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "white",
                fontWeight: "bold",
                fontSize: "0.8rem",
                height: "25px",
                px: 3,
                py: 1,
                borderRadius: 4,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#04122075",
                },
              }}
            >
              {ctaText}
            </Button>
          </Link>
        </Box>

        {/* Brand/Logo Section */}
        <Box
          sx={{
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Image
            src="/logo-znews-light-2.svg"
            alt="Znews Logo"
            width={120}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "#666",
              fontWeight: "bold",
              fontSize: "0.7rem",
            }}
          >
            Legend
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
