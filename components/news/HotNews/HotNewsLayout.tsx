"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { Article } from "@/lib/types";
import HotNews from "./HotNews";

export default function HotNewsLayout({ articles }: { articles: Article[] }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HotNews articles={articles} isMd={isMd} isSmall={isSmall} />
  );
}