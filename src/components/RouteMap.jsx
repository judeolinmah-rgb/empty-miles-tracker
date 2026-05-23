import { TRIPS, HUBS, HUB_COLORS, MAIN_HUBS } from '../data'

export default function RouteMap() {
  const ns = 'http://www.w3.org/2000/svg'

  return (
    <div>
      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 14, fontSize: 12, color: '#6b6b66', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 24, height: 3, background: '#a32d2d', display: 'inline-block', borderRadius: 2 }} /> Empty / deadhead
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 24, height: 3, background: '#3b6d11', display: 'inline-block', borderRadius: 2 }} /> Fully loaded
        </span>
      </div>

      {/* SVG Map */}
      <div style={{ background: '#eef2f7', borderRadius: 10, overflow: 'hidden', marginBottom: 14 }}>
        <svg viewBox="0 0 480 340" style={{ display: 'block', width: '100%' }}>
          {/* Background */}
          <rect width="480" height="340" fill="#eef2f7" />
          <text x="12" y="22" fontSize="11" fill="#9ca3af" fontWeight="600">NY / NJ / PA / CT corridor</text>

          {/* Route lines */}
          {TRIPS.map((t, idx) => {
            const o = HUBS[t.o]
            const d = HUBS[t.dt]
            if (!o || !d) return null
            const isEmpty = t.emp > 0
            const color = isEmpty ? '#a32d2d' : '#3b6d11'
            const offset = ((idx % 3) - 1) * 18
            const mx = (o.x + d.x) / 2 + offset
            const my = (o.y + d.y) / 2 - Math.abs(offset) * 0.8
            return (
              <path
                key={t.id}
                d={`M${o.x},${o.y} Q${mx},${my} ${d.x},${d.y}`}
                fill="none"
                stroke={color}
                strokeWidth={isEmpty ? 2 : 1.5}
                strokeOpacity={isEmpty ? 0.8 : 0.5}
                strokeDasharray={isEmpty ? '6,3' : 'none'}
              />
            )
          })}

          {/* Hub circles */}
          {Object.entries(HUBS).map(([name, pos]) => {
            const trips = TRIPS.filter(t => t.hub === name)
            const empLegs = trips.filter(t => t.emp > 0).length
            const pct = trips.length ? Math.round(empLegs / trips.length * 100) : 0
            const isMain = MAIN_HUBS.includes(name)
            const r = isMain ? 10 : 7
            const color = HUB_COLORS[name] || '#888'
            return (
              <g key={name}>
                <circle cx={pos.x} cy={pos.y} r={r} fill={color} stroke="#fff" strokeWidth={2} />
                <text x={pos.x} y={pos.y + r + 12} fontSize="9" fill="#374151" textAnchor="middle" fontWeight="600">
                  {name}
                </text>
                {isMain && (
                  <text x={pos.x} y={pos.y + r + 22} fontSize="8" fill="#6b6b66" textAnchor="middle">
                    {pct}% empty
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Hub Summary Table */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Hub Summary
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Hub', 'Trips', 'Empty Legs', 'Empty Rate', 'Priority'].map(h => (
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