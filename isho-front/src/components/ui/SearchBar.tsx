"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function SearchBar() {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.medium,
        padding: "6px 12px",
        width: "280px",
        transition: "all 0.3s ease",
      }}
    >
      {/* Search Icon */}
      <span
        style={{
          color: theme.colors.text,
          fontSize: "1rem",
          marginRight: "8px",
        }}
      >
        🔍
      </span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search volunteers, organizations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "0.9rem",
          backgroundColor: "transparent",
          color: theme.colors.text,
        }}
      />
    </div>
  );
}
