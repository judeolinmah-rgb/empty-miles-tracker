import { DRIVERS, TRIPS, MAIN_HUBS } from '../data'

export default function PredictivePositioning() {
  return (
    <div>

      {/* Intro */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '24px 28px', marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#185fa5', marginBottom: 10 }}>
          Predictive Positioning
        </h2>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#444' }}>
          Using each driver's last 30 days of trip data, the system identifies which lanes consistently generate empty return legs, which days of the week are highest risk, and which drivers need attention first. This is the same principle used by companies like Uber Freight and Convoy at scale — the difference is that even a small fleet can benefit from basic pattern recognition on their own historical data.
        </p>
      </div>

      {/* How It Works */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 16 }}>
        <Step number="1" title="Identify Problem Lanes" body="Lanes where drivers consistently return empty are flagged automatically. If Albany → Meadowlands generates a deadhead 80% of the time, that's a structural problem, not bad luck." />
        <Step number="2" title="Pre-Position Drivers" body="Before a driver completes an outbound leg, dispatch is alerted to secure a return load. The goal is zero time between delivery and next pickup." />
        <Step number="3" title="Score Every Lane" body="Each lane gets a risk score based on historical empty rate, seasonal demand, and broker availability. High-risk lanes trigger automatic load board searches." />
        <Step number="4" title="Measure & Improve" body="Every intervention is tracked. If pre-positioning on a lane reduces empty miles by 40%, that lane's playbook is locked in and applied fleet-wide." />
      </div>

      {/* Driver Risk Table */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px', marginBottom: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Driver Empty Mile Risk Assessment
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Driver', 'Total Miles', 'Empty Miles', 'Empty Rate', 'Risk Level', 'Action'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DRIVERS.map((driver, i) => {
                const myTrips = TRIPS.filter(t => t.d === i)
                const tot = myTrips.reduce((a, t) => a + t.tot, 0)
                const emp = myTrips.reduce((a, t) => a + t.emp, 0)
                const pct = tot ? Math.round(emp / tot * 100) : 0
                const risk = pct >= 50 ? 'High' : pct >= 30 ? 'Medium' : 'Low'
                const badge = pct >= 50 ? { bg: '#fcebeb', tx: '#a32d2d' } : pct >= 30 ? { bg: '#faeeda', tx: '#854f0b' } : { bg: '#eaf3de', tx: '#3b6d11' }
                const action = pct >= 50 ? 'Immediate load match' : pct >= 30 ? 'Monitor & alert' : 'On track'
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
                    <td style={{ padding: '9px 8px' }}>{tot.toLocaleString()} mi</td>
                    <td style={{ padding: '9px 8px' }}>{emp.toLocaleString()} mi</td>
                    <td style={{ padding: '9px 8px', fontWeight: 600 }}>{pct}%</td>
                    <td style={{ padding: '9px 8px' }}>
                      <span style={{ background: badge.bg, color: badge.tx, fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                        {risk}
                      </span>
                    </td>
                    <td style={{ padding: '9px 8px', color: '#6b6b66' }}>{action}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hub Risk Table */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Hub Empty Mile Risk
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Hub', 'Total Trips', 'Empty Legs', 'Empty Rate', 'Priority'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MAIN_HUBS.map(hub => {
                const trips = TRIPS.filter(t => t.hub === hub)
                const empLegs = trips.filter(t => t.emp > 0).length
                const pct = trips.length ? Math.round(empLegs / trips.length * 100) : 0
                const priority = pct >= 60 ? 'High' : pct >= 40 ? 'Medium' : 'Low'
                const badge = pct >= 60 ? { bg: '#fcebeb', tx: '#a32d2d' } : pct >= 40 ? { bg: '#faeeda', tx: '#854f0b' } : { bg: '#eaf3de', tx: '#3b6d11' }
                return (
                  <tr key={hub} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <td style={{ padding: '9px 8px', fontWeight: 600 }}>{hub}</td>
                    <td style={{ padding: '9px 8px' }}>{trips.length}</td>
                    <td style={{ padding: '9px 8px' }}>{empLegs}</td>
                    <td style={{ padding: '9px 8px' }}>{pct}%</td>
                    <td style={{ padding: '9px 8px' }}>
                      <span style={{ background: badge.bg, color: badge.tx, fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                        {priority}
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

function Step({ number, title, body }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 18px' }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#185fa5', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        {number}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}