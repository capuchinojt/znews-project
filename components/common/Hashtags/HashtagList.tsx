import Box from "@mui/material/Box";
import Image from "next/image";

import HashtagButton from "@/components/common/HashtagButton";

export default function HashtagList({ hashtags }: { hashtags: string[] }) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-start",
        alignItems: "center",
        py: 1,
        px: 1,
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mr: 2,
        }}
      >
        <Image
          src="/trending-icon.svg"
          alt="Znews Logo"
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </Box>
      {hashtags.map((hashtag, index) => (
        <HashtagButton key={index} label={hashtag} sx={{ mr: 1 }} />
      ))}
    </Box>
  );
}
