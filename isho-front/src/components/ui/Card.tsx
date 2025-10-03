// Card.tsx
"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Card({ title, children, style }: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.medium,
        padding: theme.spacing(2),
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        ...style,
      }}
    >
      {title && (
        <h3
          style={{
            marginBottom: theme.spacing(1),
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: theme.colors.primary,
          }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
