'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Volunteer {
  id: number;
  name: string;
  email: string;
  specialty: string;
  hours: number;
}

// Reusable Card Component
function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.medium,
        padding: theme.spacing(2),
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Reusable Button Component
function Button({
  children,
  variant = 'primary',
  onClick,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'destructive';
  onClick?: () => void;
}) {
  const { theme } = useTheme();

  const baseStyle = {
    padding: '8px 16px',
    borderRadius: theme.radius.small,
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
  };

  const variants = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.background,
    },
    destructive: {
      backgroundColor: '#ff3b30',
      color: '#fff',
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant] }}
    >
      {children}
    </button>
  );
}

export default function VolunteersPage() {
  const { theme } = useTheme();

  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    {
      id: 1,
      name: 'Jessica Wong',
      email: 'jessica@example.com',
      specialty: 'Education',
      hours: 127,
    },
    {
      id: 2,
      name: 'David Kim',
      email: 'david@example.com',
      specialty: 'Healthcare',
      hours: 115,
    },
    {
      id: 3,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      specialty: 'Environment',
      hours: 98,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [newVolunteer, setNewVolunteer] = useState({
    name: '',
    email: '',
    specialty: '',
    hours: '',
  });

  const handleAdd = () => {
    if (
      !newVolunteer.name ||
      !newVolunteer.email ||
      !newVolunteer.specialty ||
      !newVolunteer.hours
    )
      return;

    const newEntry: Volunteer = {
      id: Date.now(),
      name: newVolunteer.name,
      email: newVolunteer.email,
      specialty: newVolunteer.specialty,
      hours: parseInt(newVolunteer.hours),
    };

    setVolunteers((prev) => [...prev, newEntry]);
    setNewVolunteer({ name: '', email: '', specialty: '', hours: '' });
  };

  const handleDelete = (id: number) => {
    setVolunteers((prev) => prev.filter((v) => v.id !== id));
  };

  const filteredVolunteers = volunteers.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: '100vh',
      }}
    >
        {/* Navigation */}

      <main
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: theme.spacing(4),
        }}
      >
        <h1 style={{ marginBottom: theme.spacing(2) }}>Volunteers</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search volunteers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px',
            width: '100%',
            maxWidth: '300px',
            marginBottom: theme.spacing(2),
            borderRadius: theme.radius.small,
            border: `1px solid ${theme.colors.border}`,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          }}
        />

        {/* Add Volunteer Form */}
        <Card>
          <h3 style={{ marginBottom: theme.spacing(1) }}>Add Volunteer</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input
              placeholder="Name"
              value={newVolunteer.name}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, name: e.target.value })
              }
              style={{ flex: 1, padding: '8px' }}
            />
            <input
              placeholder="Email"
              value={newVolunteer.email}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, email: e.target.value })
              }
              style={{ flex: 1, padding: '8px' }}
            />
            <input
              placeholder="Specialty"
              value={newVolunteer.specialty}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, specialty: e.target.value })
              }
              style={{ flex: 1, padding: '8px' }}
            />
            <input
              placeholder="Hours"
              type="number"
              value={newVolunteer.hours}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, hours: e.target.value })
              }
              style={{ width: '100px', padding: '8px' }}
            />
            <Button onClick={handleAdd}>Add</Button>
          </div>
        </Card>

        {/* Volunteer List */}
        <div style={{ marginTop: theme.spacing(4) }}>
          {filteredVolunteers.length === 0 ? (
            <p>No volunteers found.</p>
          ) : (
            filteredVolunteers.map((v) => (
              <Card key={v.id} style={{ marginBottom: theme.spacing(2) }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>{v.name}</h3>
                    <p style={{ margin: '4px 0', color: theme.colors.text }}>
                      📧 {v.email} • 🌱 {v.specialty} • ⏱ {v.hours} hrs
                    </p>
                  </div>
                  <Button variant="destructive" onClick={() => handleDelete(v.id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
