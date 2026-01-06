import React from "react";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden",
        hover && "transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
