import { useState } from 'react'
import { TRIPS, MATCHES, DRIVERS } from '../data'

export default function Optimization() {
  const [emptyRate, setEmptyRate] = useState(38)

  const totalEmp = TRIPS.reduce((a, t) => a + t.emp, 0)
  const totalTot = TRIPS.reduce((a, t) => a + t.tot, 0)
  const currentCost = (totalEmp * 1.80).toFixed(0)
  const savedMiles = Math.round(totalEmp * (emptyRate / 100))
  const savedCost = (savedMiles * 1.80).toFixed(0)
  const newEmpMiles = totalEmp - savedMiles
  const newEmpRate = ((newEmpMiles / totalTot) * 100).toFixed(1)

  return (
    <div>

      {/* Slider */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px', marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <label style={{ fontSize: 13, fontWeight: 500 }}>Empty mile reduction target</label>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#185fa5' }}>{emptyRate}%</span>
        </div>
        <input
          type="range"
          min={10}
          max={80}
          value={emptyRate}
          onChange={e => setEmptyRate(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#185fa5' }}
        />
      </div>

      {/* Savings Banner */}
      <div style={{ background: '#eaf3de', border: '1px solid rgba(59,109,17,0.2)', borderRadius: 10, padding: '14px 18px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontSize: 13, color: '#3b6d11', fontWeight: 600 }}>Projected monthly savings</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#3b6d11' }}>${parseInt(savedCost).toLocaleString()}</span>
      </div>

      {/* Before / After */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
        <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 18px' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Current state</h3>
          <Row label="Empty miles" value={totalEmp.toLocaleString() + ' mi'} />
          <Row label="Empty rate" value={(totalEmp / totalTot * 100).toFixed(1) + '%'} />
          <Row label="Est. monthly cost" value={'$' + parseInt(currentCost).toLocaleString()} />
        </div>
        <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 18px' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>After optimization</h3>
          <Row label="Empty miles" value={newEmpMiles.toLocaleString() + ' mi'} />
          <Row label="Empty rate" value={newEmpRate + '%'} />
          <Row label="Est. monthly cost" value={'$' + parseInt((newEmpMiles * 1.80)).toLocaleString()} />
        </div>
      </div>

      {/* Load Match Suggestions */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Load Match Suggestions
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Driver', 'Outbound', 'Return match', 'Miles saved', 'Quality'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATCHES.map((m, i) => {
                const badge = m.q === 'Excellent' ? { bg: '#eaf3de', tx: '#3b6d11' } : m.q === 'Good' ? { bg: '#faeeda', tx: '#854f0b' } : { bg: '#f0f0f0', tx: '#6b6b66' }
                return (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{DRIVERS[m.d].name}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{m.out}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{m.back}</td>
                    <td style={{ padding: '9px 8px', whiteSpace: 'nowrap' }}>{m.saved} mi</td>
                    <td style={{ padding: '9px 8px' }}>
                      <span style={{ background: badge.bg, color: badge.tx, fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                        {m.q}
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

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(0,0,0,0.07)', fontSize: 13 }}>
      <span style={{ color: '#6b6b66' }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  )
}