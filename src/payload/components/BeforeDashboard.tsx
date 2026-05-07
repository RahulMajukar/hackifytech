import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { DashboardGreeting } from './DashboardGreeting'

export async function BeforeDashboard() {
  let counts = { users: 0, courses: 0, batches: 0, leads: 0 }

  try {
    const payload = await getPayload({ config: configPromise })
    const [u, c, b, l] = await Promise.all([
      payload.count({ collection: 'users' }),
      payload.count({ collection: 'courses' }),
      payload.count({ collection: 'batches', where: { status: { equals: 'active' } } }),
      payload.count({ collection: 'leads', where: { status: { equals: 'new' } } }),
    ])
    counts = {
      users: u.totalDocs,
      courses: c.totalDocs,
      batches: b.totalDocs,
      leads: l.totalDocs,
    }
  } catch {
    // fail silently — dashboard still renders without counts
  }

  const stats = [
    { label: 'Total Users', value: counts.users, icon: '👥', color: 'hsl(210 70% 55%)' },
    { label: 'Courses', value: counts.courses, icon: '📚', color: 'hsl(160 74% 52%)' },
    { label: 'Active Batches', value: counts.batches, icon: '🗓️', color: 'hsl(280 60% 60%)' },
    {
      label: 'New Leads',
      value: counts.leads,
      icon: '📋',
      color: counts.leads > 0 ? 'hsl(38 92% 55%)' : 'hsl(220 10% 50%)',
    },
  ]

  const tiles = [
    { group: 'People', href: '/admin/collections/users', icon: '👤', desc: 'Users & roles' },
    { group: 'Content', href: '/admin/collections/courses', icon: '📖', desc: 'Courses & media' },
    {
      group: 'Operations',
      href: '/admin/collections/batches',
      icon: '📅',
      desc: 'Batches & attendance',
    },
    { group: 'CRM', href: '/admin/collections/leads', icon: '📊', desc: 'Leads pipeline' },
  ]

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Welcome banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, hsl(220 55% 13%), hsl(220 48% 17%))',
          border: '1px solid hsl(220 38% 22%)',
          borderLeft: '4px solid hsl(160 74% 52%)',
          borderRadius: 12,
          padding: '20px 24px',
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              margin: 0,
              color: 'hsl(0 0% 95%)',
              letterSpacing: '-0.01em',
            }}
          >
            HackifyTech Admin Portal
          </h2>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 13,
              color: 'hsl(220 10% 55%)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Manage courses, students, batches, and leads from one place.
          </p>
        </div>
        <DashboardGreeting />
      </div>

      {/* Stats cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 14,
          marginBottom: 20,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'hsl(220 48% 14%)',
              border: '1px solid hsl(220 38% 20%)',
              borderRadius: 12,
              padding: '18px 20px',
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8, lineHeight: 1 }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: 30,
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'hsl(220 10% 50%)',
                marginTop: 6,
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick nav tiles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 12,
          marginBottom: 8,
        }}
      >
        {tiles.map((tile) => (
          <a
            key={tile.group}
            href={tile.href}
            className="htadmin-tile"
            style={{
              background: 'hsl(220 50% 15%)',
              border: '1px solid hsl(220 38% 20%)',
              borderRadius: 10,
              padding: '14px 16px',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 6, lineHeight: 1 }}>{tile.icon}</div>
            <div
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: 'hsl(0 0% 90%)',
                marginBottom: 2,
              }}
            >
              {tile.group}
            </div>
            <div style={{ fontSize: 11, color: 'hsl(220 10% 48%)', fontFamily: "'Inter', sans-serif" }}>
              {tile.desc}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
