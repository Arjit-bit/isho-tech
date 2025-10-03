"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import SearchBar from "./ui/SearchBar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const pathname = usePathname();

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    fontWeight: 500,
    padding: "6px 12px",
    borderRadius: theme.radius.small,
    transition: "all 0.3s ease",
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/volunteers", label: "Volunteers" },
    { href: "/organizations", label: "Organizations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav
      style={{
        backgroundColor: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* LEFT: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
            borderRadius: theme.radius.medium,
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          I
        </div>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Ishotech</span>
      </div>

      {/* CENTER: Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                ...linkStyle,
                color: isActive ? theme.colors.primary : theme.colors.text,
                backgroundColor: isActive ? theme.colors.border : "transparent",
                fontWeight: isActive ? 600 : 500,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = theme.colors.border)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = isActive
                  ? theme.colors.border
                  : "transparent")
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* RIGHT: Search + Theme Toggle + Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <SearchBar />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 10px",
            borderRadius: theme.radius.medium,
            border: `1px solid ${theme.colors.border}`,
            background: theme.colors.primary,
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Refresh */}
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: theme.colors.text,
          }}
        >
          ⟳
        </button>

        {/* User Icon */}
        <div
          style={{
            backgroundColor: theme.colors.border,
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          👤
        </div>
      </div>
    </nav>
  );
}
