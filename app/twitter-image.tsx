import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sree Jagatab - AI Automation Engineer'
export const size = {
  width: 1200,
  height: 600,
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 12px 0',
            }}
          >
            Sree Jagatab
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#3b82f6',
              margin: '0 0 24px 0',
            }}
          >
            AI Automation Engineer
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#a1a1aa',
              margin: '0',
            }}
          >
            £2.1M+ Client Savings • 50+ Clients • Cambridgeshire, UK
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
