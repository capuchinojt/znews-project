'use client';
import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";

export default function SearchIconButton() {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <IconButton color="inherit" size="small" onClick={() => setShowSearch(true)}>
        <SearchIcon />
      </IconButton>
      {showSearch && (
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            background: '#424242',
            borderRadius: '20px',
            px: 2,
            py: 0.5,
            minWidth: 250,
            boxShadow: 3,
          }}
        >
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Nhập vào nội dung cần tìm..."
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              color: '#fff',
              width: '100%',
              fontSize: 12,
            }}
            onBlur={() => setShowSearch(false)}
          />
          <SearchIcon sx={{ color: '#3399cc', ml: 1 }} />
        </Box>
      )}
    </Box>
  );
}