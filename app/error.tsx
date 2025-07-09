"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        <Typography variant="h4" component="h1" gutterBottom color="error">
          Oops! Có lỗi xảy ra
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
          Chúng tôi gặp sự cố khi tải nội dung. Vui lòng thử lại sau.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 4, color: "text.disabled", fontFamily: "monospace" }}
        >
          {error.message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={reset}
          sx={{ mr: 2 }}
        >
          Thử lại
        </Button>
        <Button variant="outlined" color="primary" href="/">
          Về trang chủ
        </Button>
      </Box>
    </Container>
  );
}
