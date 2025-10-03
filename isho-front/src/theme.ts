// src/theme.ts

// 1. Define lightTheme first
export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    primary: "#007AFF",
    secondary: "#FF9500",
    border: "#E5E5E5",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
};

// 2. Infer type from lightTheme
export type ThemeType = typeof lightTheme;

// 3. Define darkTheme using ThemeType
export const darkTheme: ThemeType = {
  ...lightTheme, // spread to keep spacing & radius same
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    primary: "#0A84FF",
    secondary: "#FF9F0A",
    border: "#333333",
  },
};

// 4. Default export (useful if you always want a fallback)
export default lightTheme;
