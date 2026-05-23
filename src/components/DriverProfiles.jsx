import { DRIVERS, TRIPS } from '../data'

export default function DriverProfiles() {
  return (
    <div>
      {/* Driver Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14, marginBottom: 24 }}>
        {DRIVERS.map((driver, i) => {
          const myTrips = TRIPS.filter(t => t.d === i)
          const tot = myTrips.reduce((a, t) => a + t.tot, 0)
          const emp = myTrips.reduce((a, t) => a + t.emp, 0)
          const loaded = tot - emp
          const pct = tot ? Math.round(emp / tot * 100) : 0
          const color = pct >= 50 ? '#a32d2d' : pct >= 30 ? '#854f0b' : '#3b6d11'

          return (
            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: 16 }}>
              
              {/* Avatar + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: driver.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                  {driver.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{driver.name}</div>
                  <div style={{ fontSize: 12, color: '#6b6b66', marginTop: 2 }}>{driver.phone}</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
                <Stat label="Total mi" value={tot.toLocaleString()} />
                <Stat label="Loaded mi" value={loaded.toLocaleString()} />
                <Stat label="Empty mi" value={emp.toLocaleString()} />
                <Stat label="Trips" value={myTrips.length} />
              </div>

              {/* CDL + Base */}
              <div style={{ fontSize: 11, color: '#6b6b66', marginBottom: 10 }}>
                {driver.cdl} · {driver.base}
              </div>

              {/* Empty % Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b6b66', marginBottom: 4 }}>
                  <span>Empty rate</span>
                  <span style={{ fontWeight: 700, color }}>{pct}%</span>
                </div>
                <div style={{ height: 7, background: '#e8e7e3', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 4 }} />
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div style={{ background: '#f8f7f4', borderRadius: 6, padding: '7px 9px' }}>
      <div style={{ fontSize: 10, color: '#6b6b66', fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{value}</div>
    </div>
  )
}