"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";

import { navMenu } from "@/lib/data/mockItems";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <IconButton color="inherit" size="small" onClick={handleDrawerOpen}>
        {open ? <CloseIcon onClick={handleDrawerClose} /> : <MoreHorizIcon />}
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        sx={{ justifyContent: "center" }}
        slotProps={{
          paper: {
            sx: {
              background: "#18192b",
              color: "#fff",
              width: "100%",
              p: 3,
              mt: 7,
              justifyContent: "center",
            },
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            width: "100%",
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            {navMenu.map((item) => (
              <Grid size={{ xs: 6, sm: 3 }} key={item}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#dd0000", marginRight: 6 }}>/</span>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}
