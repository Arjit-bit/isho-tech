// src/components/theme/ThemeSwitcher.tsx
"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, isDark, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme.colors.primary,
        color: theme.colors.text,
        border: "none",
        borderRadius: theme.radius.medium,
        padding: theme.spacing(1),
        cursor: "pointer",
      }}
    >
      Switch to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitcher;
