"use client";
import React, { useState, useRef, useCallback } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { ButtonProps } from "@mui/material";

interface StyledHashtagButtonProps {
  ishoveringandtimed?: number;
  ishovering?: number;
}

const StyledHashtagButton = styled(Button)<StyledHashtagButtonProps>(
  ({ theme, ishoveringandtimed, ishovering }) => ({
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "20px",
    padding: "1px 16px",
    textTransform: "none",
    fontWeight: 300,
    boxShadow: "none",
    transition:
      "background-color 0.3s ease, color 0.3s ease, background-image 0.5s ease",

    "&:hover": {
      backgroundColor: "#00BFFF",
      color: "#fff",
      boxShadow: "none",
    },

    ...(ishoveringandtimed && {
      backgroundImage: "linear-gradient(to right, #FF4B2B, #FF416C)",
      color: "#fff",
      transition: "background-image 0.5s ease-in-out",
    }),

    ...(ishoveringandtimed && {
      "&:hover": {
        backgroundImage: "linear-gradient(to right, #FF4B2B, #FF416C)",
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    }),

    ...(!ishoveringandtimed &&
      ishovering && {
        backgroundColor: "#00BFFF",
        color: "#fff",
      }),
  })
);

interface HashtagButtonProps extends ButtonProps {
  label: string;
  icon?: React.ElementType;
}

const HashtagButton: React.FC<HashtagButtonProps> = ({
  label,
  icon: IconComponent,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringAndTimed, setIsHoveringAndTimed] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);

    hoverTimerRef.current = setTimeout(() => {
      setIsHoveringAndTimed(true);
    }, 2000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsHoveringAndTimed(false);
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  return (
    <StyledHashtagButton
      variant="contained"
      startIcon={IconComponent ? <IconComponent /> : null}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ishovering={isHovering ? 1 : 0}
      ishoveringandtimed={isHoveringAndTimed ? 1 : 0}
      {...props}
    >
      {label}
    </StyledHashtagButton>
  );
};

export default HashtagButton;
