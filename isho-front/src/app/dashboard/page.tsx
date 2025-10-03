// app/dashboard/page.tsx
"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// ✅ MOCK DATA
// --------------------------
const mockData = {
  notifications: [
    "New volunteer sign-up",
    "Organization profile approved",
    "Monthly report is ready",
  ],
  volunteerStats: {
    totalVolunteers: 58,
    newThisWeek: 5,
    activeToday: 12,
  },
  orgStats: {
    totalOrganizations: 10,
    pendingApproval: 2,
  },
  analytics: {
    eventsCreated: 12,
    volunteerEngagementRate: "76%",
    avgVolunteersPerEvent: 9,
  },
};

export default function DashboardPage() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: "100vh",
      }}
    >

      {/* Dashboard Grid */}
      <main
        style={{
          padding: theme.spacing(4),
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: theme.spacing(4),
        }}
      >
        {/* Welcome / Notifications */}
        <Card title="Welcome Back!">
          <ul style={{ paddingLeft: "1rem" }}>
            {mockData.notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <Button variant="primary" onClick={() => alert("Viewing notifications")}>
            View All
          </Button>
        </Card>

        {/* Volunteer Stats */}
        <Card title="Volunteer Overview">
          <p><strong>Total Volunteers:</strong> {mockData.volunteerStats.totalVolunteers}</p>
          <p><strong>New This Week:</strong> {mockData.volunteerStats.newThisWeek}</p>
          <p><strong>Active Today:</strong> {mockData.volunteerStats.activeToday}</p>
          <Button variant="secondary">View Volunteers</Button>
        </Card>

        {/* Organization Stats */}
        <Card title="Organizations">
          <p><strong>Total Organizations:</strong> {mockData.orgStats.totalOrganizations}</p>
          <p><strong>Pending Approval:</strong> {mockData.orgStats.pendingApproval}</p>
          <Button variant="secondary">Manage Organizations</Button>
        </Card>

        {/* Analytics */}
        <Card title="Analytics">
          <p><strong>Events Created:</strong> {mockData.analytics.eventsCreated}</p>
          <p><strong>Engagement Rate:</strong> {mockData.analytics.volunteerEngagementRate}</p>
          <p><strong>Avg Volunteers/Event:</strong> {mockData.analytics.avgVolunteersPerEvent}</p>
          <Button variant="primary">View Full Report</Button>
        </Card>
      </main>
    </div>
  );
}

