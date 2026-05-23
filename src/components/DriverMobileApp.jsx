import { DRIVERS, TRIPS } from '../data'

export default function DriverMobileApp() {
  return (
    <div>

      {/* Intro */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '24px 28px', marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#185fa5', marginBottom: 10 }}>
          Driver Mobile Interface
        </h2>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#444' }}>
          A purpose-built mobile experience for owner-operators. No paperwork, no phone tag — just clean, actionable information delivered to the driver at the right moment. Load details, turn-by-turn routing, earnings tracking, and real-time dispatch communication in one place.
        </p>
      </div>

      {/* Feature Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 16 }}>
        <Feature icon="📦" title="Load Details" body="Full load information at a glance — origin, destination, weight, broker contact, and special instructions. No calls required." />
        <Feature icon="🗺️" title="Turn-by-Turn Routing" body="Optimized routes that account for truck restrictions, weigh stations, and known congestion points in the NY/NJ/PA/CT corridor." />
        <Feature icon="💵" title="Earnings Tracker" body="Real-time visibility into gross earnings, deductions, and net pay per trip and per week. No surprises on settlement day." />
        <Feature icon="📡" title="Dispatch Messaging" body="Direct communication with dispatch without phone calls. Load offers, route changes, and updates delivered as notifications." />
        <Feature icon="⏱️" title="HOS Tracking" body="Hours of service monitoring integrated directly into the app. Drivers stay compliant without managing a separate ELD interface." />
        <Feature icon="🔄" title="Backhaul Alerts" body="When a return load is available on a driver's lane, they get an alert before they even finish the outbound leg." />
      </div>

      {/* Driver Load Summary */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Current Driver Status
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Driver', 'Base', 'Trips', 'Last Origin', 'Last Destination', 'Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DRIVERS.map((driver, i) => {
                const myTrips = TRIPS.filter(t => t.d === i)
                const lastTrip = myTrips[myTrips.length - 1]
                const emp = myTrips.reduce((a, t) => a + t.emp, 0)
                const tot = myTrips.reduce((a, t) => a + t.tot, 0)
                const pct = tot ? Math.round(emp / tot * 100) : 0
                const status = pct >= 50 ? 'High empty' : pct >= 30 ? 'Moderate' : 'Efficient'
                const badge = pct >= 50 ? { bg: '#fcebeb', tx: '#a32d2d' } : pct >= 30 ? { bg: '#faeeda', tx: '#854f0b' } : { bg: '#eaf3de', tx: '#3b6d11' }
                return (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: driver.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 10, flexShrink: 0 }}>
                          {driver.initials}
                        </div>
                        {driver.name}
                      </div>
                    </td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap', color: '#6b6b66' }}>{driver.base}</td>
                    <td style={{ padding: '9px 8px' }}>{myTrips.length}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{lastTrip?.o || '—'}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{lastTrip?.dt || '—'}</td>
                    <td style={{ padding: '9px 8px' }}>
                      <span style={{ background: badge.bg, color: badge.tx, fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

function Feature({ icon, title, body }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 18px' }}>
      <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}