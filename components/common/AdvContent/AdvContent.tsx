import { NewsGrid } from "@/components/news/NewsGrid/NewsGrid";
import { Box, CardMedia, Grid } from "@mui/material";
import Link from "next/link";
import SidebarArticlesSection from "../Section/SidebarArticlesSection";

export default function AdvContent() {
  return (
    <Box sx={{ pb: 5 }}>
      <Link
        href="https://thegioididong.com"
        style={{
          textDecoration: "none",
          paddingBottom: "20px",
          display: "block",
        }}
        target="_blank"
        passHref
      >
        <CardMedia
          component="img"
          image="/images/advertisement/adv(1).png"
          alt="adv_1"
        />
      </Link>

      <Link
        href="https://thegioididong.com"
        style={{ textDecoration: "none" }}
        target="_blank"
        passHref
      >
        <CardMedia
          component="img"
          image="/images/advertisement/adv(1).png"
          alt="adv_2"
        />
      </Link>
    </Box>
  );
}
