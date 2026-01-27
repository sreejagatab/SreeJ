import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sree Jagatab - AI Automation Engineer'
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
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 80px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              padding: '8px 16px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
              }}
            />
            <span style={{ color: '#a1a1aa', fontSize: '20px' }}>
              Available for Projects
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 16px 0',
              textAlign: 'center',
            }}
          >
            Sree Jagatab
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: '36px',
              color: '#3b82f6',
              margin: '0 0 24px 0',
              textAlign: 'center',
            }}
          >
            AI Automation Engineer
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: '24px',
              color: '#a1a1aa',
              margin: '0 0 40px 0',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Save 5+ Hours Daily with Intelligent Automation
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6' }}>£2.1M+</span>
              <span style={{ fontSize: '18px', color: '#71717a' }}>Client Savings</span>
            </div>
            <div style={{ width: '1px', height: '60px', backgroundColor: '#27272a' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6' }}>50+</span>
              <span style={{ fontSize: '18px', color: '#71717a' }}>Clients Served</span>
            </div>
            <div style={{ width: '1px', height: '60px', backgroundColor: '#27272a' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6' }}>4.9/5</span>
              <span style={{ fontSize: '18px', color: '#71717a' }}>Rating</span>
            </div>
          </div>
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
          <span>jagatab.uk</span>
          <span>•</span>
          <span>Cambridgeshire, UK</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
