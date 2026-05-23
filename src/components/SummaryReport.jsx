import { DRIVERS, TRIPS, MATCHES, MAIN_HUBS } from '../data'

export default function SummaryReport() {
  const tot = TRIPS.reduce((a, t) => a + t.tot, 0)
  const emp = TRIPS.reduce((a, t) => a + t.emp, 0)
  const pct = (emp / tot * 100).toFixed(1)
  const cost = (emp * 2.50).toFixed(0)
  const totalSaved = MATCHES.reduce((a, m) => a + m.saved, 0)
  const savedCost = (totalSaved * 2.50).toFixed(0)

  return (
    <div>

      {/* Print Button */}
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => window.print()}
          style={{ background: '#185fa5', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
        >
          Print Report ↗
        </button>
      </div>

      <div style={{ maxWidth: 720 }}>

        {/* Report Header */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid #185fa5', paddingBottom: 16, marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#185fa5' }}>J. Hammerhead Trucking LLC</h2>
          <p style={{ fontSize: 13, color: '#6b6b66', marginTop: 4 }}>Empty Miles Report · NY/NJ/PA/CT Corridor · 30-Day Window</p>
        </div>

        {/* KPI Summary */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, borderLeft: '4px solid #185fa5', paddingLeft: 10, marginBottom: 12 }}>Fleet Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
            <ReportKPI label="Total Miles" value={tot.toLocaleString()} />
            <ReportKPI label="Empty Miles" value={emp.toLocaleString()} />
            <ReportKPI label="Empty Rate" value={pct + '%'} />
            <ReportKPI label="Est. Cost" value={'$' + parseInt(cost).toLocaleString()} />
            <ReportKPI label="Drivers" value={DRIVERS.length} />
            <ReportKPI label="Trips Logged" value={TRIPS.length} />
          </div>
        </div>

        {/* Key Findings */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, borderLeft: '4px solid #185fa5', paddingLeft: 10, marginBottom: 12 }}>Key Findings</h3>
          {[
            `Fleet empty mile rate is ${pct}% — above the industry target of 20–30% for optimized operations.`,
            `${emp.toLocaleString()} empty miles were driven in the 30-day window at an estimated cost of $${parseInt(cost).toLocaleString()}.`,
            `${MATCHES.length} specific load match opportunities identified that could save ${totalSaved.toLocaleString()} miles and $${parseInt(savedCost).toLocaleString()} per month (based on broker-matched backhaul lanes, independent of reduction target).`,
            `Port Newark and JFK Cargo are the highest-priority hubs for backhaul intervention based on empty leg frequency.`,
            `4 of 6 drivers have empty rates above 40%, indicating a systemic lane problem rather than individual driver behavior.`,
          ].map((finding, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#185fa5', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </div>
              <span>{finding}</span>
            </div>
          ))}
        </div>

        {/* Driver Table */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, borderLeft: '4px solid #185fa5', paddingLeft: 10, marginBottom: 12 }}>Driver Performance</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Driver', 'Total Miles', 'Empty Miles', 'Empty Rate', 'Trips'].map(h => (
                  <th key={h} style={{ background: '#185fa5', color: '#fff', padding: 8, textAlign: 'left', fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DRIVERS.map((driver, i) => {
                const myTrips = TRIPS.filter(t => t.d === i)
                const tot = myTrips.reduce((a, t) => a + t.tot, 0)
                const emp = myTrips.reduce((a, t) => a + t.emp, 0)
                const pct = tot ? Math.round(emp / tot * 100) : 0
                return (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ padding: '7px 8px', fontWeight: 600 }}>{driver.name}</td>
                    <td style={{ padding: '7px 8px' }}>{tot.toLocaleString()}</td>
                    <td style={{ padding: '7px 8px' }}>{emp.toLocaleString()}</td>
                    <td style={{ padding: '7px 8px', fontWeight: 600, color: pct >= 50 ? '#a32d2d' : pct >= 30 ? '#854f0b' : '#3b6d11' }}>{pct}%</td>
                    <td style={{ padding: '7px 8px' }}>{myTrips.length}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Recommendations */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, borderLeft: '4px solid #185fa5', paddingLeft: 10, marginBottom: 12 }}>Recommendations</h3>
          {[
            'Implement load matching on the top 5 identified backhaul lanes immediately — estimated $' + parseInt(savedCost).toLocaleString() + '/month savings.',
            'Pre-position drivers on Albany and Bridgeport CT lanes before outbound legs complete to eliminate deadhead returns.',
            'Engage broker network for standing return load agreements on Port Newark → PA corridor.',
            'Set fleet-wide empty mile target of 25% and review weekly against this dashboard.',
          ].map((rec, i) => (
            <div key={i} style={{ background: '#eaf3de', borderRadius: 8, padding: '12px 14px', marginBottom: 8, fontSize: 13, color: '#3b6d11' }}>
              {rec}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#6b6b66', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 14 }}>
          Generated by J. Hammerhead Trucking LLC · Empty Miles Tracker · Confidential
        </div>

      </div>
    </div>
  )
}

function ReportKPI({ label, value }) {
  return (
    <div style={{ background: '#f8f7f4', borderRadius: 8, padding: 12, textAlign: 'center' }}>
      <div style={{ fontSize: 11, color: '#6b6b66', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>{value}</div>
    </div>
  )
}