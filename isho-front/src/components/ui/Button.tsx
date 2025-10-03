"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import SearchBar from "./SearchBar";
// import Button from "./Button"; // Remove this line to avoid circular import

export default function Button(props: { variant: string; children: React.ReactNode; onClick?: () => void }) {
  // Example Button implementation, adjust as needed
  const { variant, children, onClick } = props;
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Move the navigation bar code to its own component
export function NavigationBar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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

      {/* CENTER: Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href="/dashboard"><Button variant="primary">Dashboard</Button></Link>
        <Link href="/volunteers"><Button variant="secondary">Volunteers</Button></Link>
        <Link href="/organizations"><Button variant="secondary">Organizations</Button></Link>
        <Link href="/pricing"><Button variant="secondary">Pricing</Button></Link>
        <Link href="/resources"><Button variant="secondary">Resources</Button></Link>
      </div>

      {/* RIGHT: Search + Theme Toggle + Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <SearchBar />

        {/* Theme Toggle */}
        <Button variant="secondary" onClick={toggleTheme}>
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </Button>

        {/* Refresh */}
        <Button variant="secondary">⟳</Button>

        {/* User Avatar (Dropdown trigger) */}
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
            position: "relative",
          }}
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          👤
          {userMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                right: 0,
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.radius.medium,
                padding: theme.spacing(2),
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                minWidth: "160px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              <Link href="/profile"><Button variant="secondary">Profile</Button></Link>
              <Link href="/settings"><Button variant="secondary">Settings</Button></Link>
              <Button
                variant="destructive"
                onClick={() => alert("⚠️ Account deleted")}
              >
                Delete Account
              </Button>
              <Button
                variant="destructive"
                onClick={() => alert("🚪 Logged out")}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
