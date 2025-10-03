"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside
      style={{
        width: "240px",
        backgroundColor: theme.colors.background,
        borderRight: `1px solid ${theme.colors.border}`,
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        color: theme.colors.text,
      }}
    >
      <h2 style={{ color: theme.colors.primary, fontWeight: "bold" }}>TailAdmin</h2>

      <nav style={{ marginTop: theme.spacing(2), display: "flex", flexDirection: "column", gap: theme.spacing(1.5) }}>
        <a style={{ color: theme.colors.text, fontWeight: 500 }} href="#">
          Dashboard
        </a>
        <a style={{ color: theme.colors.text }} href="#">
          Analytics
        </a>
        <a style={{ color: theme.colors.text }} href="#">
          Marketing
        </a>
        <a style={{ color: theme.colors.text }} href="#">
          CRM
        </a>
        <a style={{ color: theme.colors.text }} href="#">
          Stocks
        </a>
      </nav>
    </aside>
  );
}
