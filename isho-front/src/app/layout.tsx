import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";

import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard with light/dark theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex h-screen w-screen">
            {/* Sidebar */}
           

            {/* Main content area */}
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1 p-5 overflow-y-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
