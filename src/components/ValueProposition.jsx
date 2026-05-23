export default function ValueProposition() {
  return (
    <div>

      {/* Headline */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '24px 28px', marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#185fa5', marginBottom: 10 }}>
          Why J. Hammerhead Trucking?
        </h2>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#444' }}>
          Independent owner-operators bring the trucks and the licenses. J. Hammerhead brings the technology, the broker relationships, the market intelligence, and the negotiating power of a coordinated fleet — turning six independent operators into one efficient, data-driven organization.
        </p>
      </div>

      {/* Value Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 16 }}>
        <Pillar
          icon="📍"
          title="Market Intelligence"
          body="Real-time visibility into lane demand, hub congestion, and backhaul opportunities across the NY/NJ/PA/CT corridor — information no solo operator can access alone."
        />
        <Pillar
          icon="🔗"
          title="Broker Relationships"
          body="Established relationships with freight brokers and shippers mean faster load matching, better rates, and priority access to high-value lanes."
        />
        <Pillar
          icon="📊"
          title="Data-Driven Dispatch"
          body="Every trip is tracked. Empty miles are measured. Patterns are identified. Decisions are made on data, not gut feel — reducing deadhead miles fleet-wide."
        />
        <Pillar
          icon="💰"
          title="Shared Cost Savings"
          body="Fuel purchasing, insurance leverage, and compliance costs spread across the fleet. Solo operators pay retail. J. Hammerhead drivers pay wholesale."
        />
        <Pillar
          icon="📱"
          title="Driver Technology"
          body="A purpose-built mobile interface gives drivers turn-by-turn load instructions, earnings tracking, and real-time communication — no paperwork, no phone tag."
        />
        <Pillar
          icon="🛡️"
          title="Compliance Support"
          body="ELD compliance, DOT regulations, and licensing requirements are managed centrally — so drivers focus on driving, not paperwork."
        />
      </div>

      {/* Comparison Table */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '18px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6b6b66', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>
          Solo Operator vs. J. Hammerhead Fleet
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Factor', 'Solo Operator', 'J. Hammerhead Fleet'].map((h, i) => (
                  <th key={h} style={{ textAlign: 'left', fontWeight: 600, fontSize: 11, color: i === 2 ? '#185fa5' : '#6b6b66', textTransform: 'uppercase', letterSpacing: '.4px', padding: '8px', borderBottom: '1px solid rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Empty mile rate',       '40–60%',          '20–30% (target)'],
                ['Load matching',         'Manual / luck',   'Algorithm + broker network'],
                ['Rate negotiation',      'Take it or leave','Leverage of 6-truck fleet'],
                ['Fuel costs',            'Retail pump',     'Fleet discount purchasing'],
                ['Compliance',            'Self-managed',    'Centrally supported'],
                ['Earnings visibility',   'Paper logs',      'Real-time dashboard'],
                ['Backhaul planning',     'Ad hoc',          'Predictive positioning'],
              ].map(([factor, solo, fleet]) => (
                <tr key={factor} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <td style={{ padding: '9px 8px', fontWeight: 600 }}>{factor}</td>
                  <td style={{ padding: '9px 8px', color: '#a32d2d' }}>{solo}</td>
                  <td style={{ padding: '9px 8px', color: '#3b6d11', fontWeight: 600 }}>{fleet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

function Pillar({ icon, title, body }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 18px' }}>
      <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}