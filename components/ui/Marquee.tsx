"use client";

import React from "react";
import { Box } from "@mui/material";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: "slow" | "normal" | "fast";
  className?: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = "normal",
  className,
  reverse = false,
}) => {
  const speedDurations = {
    slow: "50s",
    normal: "30s",
    fast: "20s",
  };

  return (
    <Box
      className={className}
      sx={{
        overflow: 'hidden',
        userSelect: 'none',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          flexShrink: 0,
          animation: `marquee ${speedDurations[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* First set */}
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </Box>
    </Box>
  );
};

export default Marquee;
