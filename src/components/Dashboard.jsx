import { useState } from 'react'
import { DRIVERS, TRIPS, MAIN_HUBS, HUB_COLORS } from '../data'


function kpiColor(pct) {
  if (pct >= 50) return '#a32d2d'
  if (pct >= 30) return '#854f0b'
  return '#3b6d11'
}

export default function Dashboard() {
  const [showTalkingPoints, setShowTalkingPoints] = useState(false)

  const tot = TRIPS.reduce((a, t) => a + t.tot, 0)
  const emp = TRIPS.reduce((a, t) => a + t.emp, 0)
  const pct = (emp / tot * 100).toFixed(1)
  const cost = (emp * 2.5).toFixed(0)

  return (
    <div>
  {/* Talking Points Toggle */}
  <div style={{ marginBottom: 16 }}>
    <button
      onClick={() => setShowTalkingPoints(!showTalkingPoints)}
      style={{ background: showTalkingPoints ? '#854f0b' : '#fff', color: showTalkingPoints ? '#fff' : '#854f0b', border: '1px solid #854f0b', borderRadius: 8, padding: '7px 16px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
    >
      {showTalkingPoints ? 'Hide Talking Points' : '📋 Show Talking Points'}
    </button>
  </div>

  {/* Talking Points Panel */}
  {showTalkingPoints && (
    <div style={{ background: '#fffdf5', border: '1px solid rgba(133,79,11,0.18)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: '#854f0b', marginBottom: 10 }}>📋 Talking Points — Dashboard</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {[
          'The NY/NJ/CT/PA corridor is one of the busiest freight markets in the US, anchored by Port Newark, JFK Cargo, and the Hunts Point food terminal in the Bronx.',
          'J. Hammerhead Trucking LLC logged 25 trips over 30 days, covering 2,329 total miles — 957 of those miles were driven with an empty trailer, representing a 41.1% empty rate.',
          'The realistic working estimate for independent truckers in this corridor is 35–40%. At 41.1%, J. Hammerhead is running just above that range — representing a direct and immediate opportunity for cost reduction.',
          'At $2.50 per mile (reflecting current fuel and operating costs for a Class 8 truck in the NY/NJ market), those empty miles cost an estimated $2,393 in the 30-day period — or roughly $28,710 per year if unchanged.',
          'The weekly chart shows empty miles are consistent across the month — this is not a seasonal spike, it is a structural problem that requires a systematic fix.',
        ].map((point, i) => (
          <li key={i} style={{ fontSize: 13, color: '#1a1a18', padding: '5px 0 5px 16px', position: 'relative', lineHeight: 1.6 }}>
            <span style={{ position: 'absolute', left: 0, color: '#854f0b', fontWeight: 700 }}>→</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
)} 
      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 24 }}>
        <KPI label="Total Miles" value={tot.toLocaleString()} sub="30-day window" color="#185fa5" />
        <KPI label="Empty Miles" value={emp.toLocaleString()} sub="deadhead" color="#a32d2d" />
        <KPI label="Empty Rate" value={pct + '%'} sub="of total miles" color={kpiColor(parseFloat(pct))} />
        <KPI label="Est. Cost" value={'$' + parseInt(cost).toLocaleString()} sub="@ $2.50/mi" color="#854f0b" />
        <KPI label="Drivers" value={DRIVERS.length} sub="active" color="#185fa5" />
        <KPI label="Trips" value={TRIPS.length} sub="logged" color="#533ab7" />
      </div>

      {/* Trip Table */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Trip Log
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Trip','Driver','Origin','Destination','Total mi','Empty mi','Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRIPS.map(t => {
                const driver = DRIVERS[t.d]
                const p = t.tot ? t.emp / t.tot : 0
                const status = p >= 0.5 ? 'High empty' : p > 0 ? 'Partial' : 'Fully loaded'
                const badgeColor = p >= 0.5 ? { bg: '#fcebeb', tx: '#a32d2d' } : p > 0 ? { bg: '#faeeda', tx: '#854f0b' } : { bg: '#eaf3de', tx: '#3b6d11' }
                return (
                  <tr key={t.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{t.id}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{driver.name}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{t.o}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{t.dt}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{t.tot}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{t.emp}</td>
                    <td style={{ padding: '9px 8px' }}>
                      <span style={{ background: badgeColor.bg, color: badgeColor.tx, fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
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

function KPI({ label, value, sub, color }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 10, padding: '14px 16px' }}>
      <div style={{ fontSize: 11, color: '#6b6b66', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.4px', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 600, color }}>{value}</div>
      <div style={{ fontSize: 11, marginTop: 4, color: '#6b6b66' }}>{sub}</div>
    </div>
  )
}