import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Distributed Venture Engine - Trustless Contribution Tracking'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 50%, #16213e 100%)',
        }}
      >
        {/* DVE Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            backgroundColor: '#3b82f6',
            borderRadius: '24px',
            marginBottom: '32px',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          DVE
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 16px 0',
            textAlign: 'center',
          }}
        >
          Distributed Venture Engine
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            margin: '0 0 40px 0',
            textAlign: 'center',
            maxWidth: '900px',
            padding: '0 40px',
          }}
        >
          Trustless contribution tracking with cryptographic evidence
          and fair revenue distribution
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#22c55e' }}>50+</span>
            <span style={{ fontSize: '16px', color: '#71717a' }}>API Endpoints</span>
          </div>
          <div style={{ width: '1px', height: '50px', backgroundColor: '#27272a' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#22c55e' }}>85%+</span>
            <span style={{ fontSize: '16px', color: '#71717a' }}>Test Coverage</span>
          </div>
          <div style={{ width: '1px', height: '50px', backgroundColor: '#27272a' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#22c55e' }}>32+</span>
            <span style={{ fontSize: '16px', color: '#71717a' }}>Permissions</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '800px',
          }}
        >
          {['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'TypeScript'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderRadius: '8px',
                color: '#93c5fd',
                fontSize: '16px',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#71717a',
            fontSize: '18px',
          }}
        >
          <span>By Sree Jagatab</span>
          <span>•</span>
          <span>jagatab.uk/dve</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
