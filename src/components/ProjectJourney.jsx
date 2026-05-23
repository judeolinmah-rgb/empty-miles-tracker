export default function ProjectJourney() {
  const milestones = [
    {
      phase: '1',
      title: 'Initial Concept',
      date: 'Week 1',
      color: '#185fa5',
      items: [
        'Identified empty miles as the core inefficiency in the NY/NJ drayage market.',
        'Defined J. Hammerhead Trucking LLC as the operating entity for a coordinated owner-operator fleet.',
        'Scoped the problem: 6 drivers, NY/NJ/PA/CT corridor, 30-day tracking window.',
      ]
    },
    {
      phase: '2',
      title: 'Dashboard MVP',
      date: 'Week 2',
      color: '#3b6d11',
      items: [
        'Built an initial interactive dashboard with mock data covering the core empty miles concept.',
        'Added KPI cards, a stacked bar chart, a donut chart by region, and a trip table.',
        'Gave a working foundation to react to and iterate on.',
      ]
    },
    {
      phase: '3',
      title: 'Realistic Data',
      date: 'Week 3',
      color: '#854f0b',
      items: [
        'Replaced placeholder data with 6 named drivers with real CDL backgrounds and home bases.',
        'Used US-format phone numbers and actual highway mileages between real city pairs.',
        'Added a driver roster panel and empty mile cost estimates at $1.80/mile.',
      ]
    },
    {
      phase: '4',
      title: 'Full Feature Build',
      date: 'Week 4',
      color: '#533ab7',
      items: [
        'Expanded to 9 tabs: Dashboard, Value Proposition, Driver Profiles, Route Map, Optimization, Driver Mobile App, Predictive Positioning, Summary Report, and Project Journey.',
        'Built an SVG route map showing loaded vs. empty legs across all hubs.',
        'Added load match suggestions, an optimization slider, and a printable summary report.',
      ]
    },
    {
      phase: '5',
      title: 'React Migration',
      date: 'Current',
      color: '#0f6e56',
      items: [
        'Migrated from a single HTML file to a React + Vite application.',
        'Separated all data into src/data.js for clean component access.',
        'Built each tab as its own React component with modular, maintainable code.',
        'Connected to GitHub for version control and continuous deployment preparation.',
      ]
    },
    {
      phase: '6',
      title: 'Phase 2 — Backend',
      date: 'Upcoming',
      color: '#6b6b66',
      items: [
        'Connect Supabase for real data persistence — trips, drivers, and matches stored in a database.',
        'Add user authentication so drivers and dispatch log in separately.',
        'Deploy to Vercel for a live, shareable URL.',
        'Begin onboarding real drivers and collecting live trip data.',
      ]
    },
  ]

  return (
    <div>

      {/* Intro */}
      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '24px 28px', marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#185fa5', marginBottom: 10 }}>
          Project Journey
        </h2>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#444' }}>
          From a napkin-level observation about deadhead miles in the NY/NJ drayage market to a fully featured fleet management platform. This tab documents how the product evolved — what was built, what was learned, and where it's going next.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {milestones.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 24 }}>

            {/* Left column — phase circle + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: m.color, color: '#fff', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {m.phase}
              </div>
              {i < milestones.length - 1 && (
                <div style={{ width: 2, flex: 1, background: 'rgba(0,0,0,0.1)', marginTop: 8, minHeight: 24 }} />
              )}
            </div>

            {/* Right column — content */}
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '16px 20px', flex: 1, marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 6 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: m.color }}>{m.title}</h3>
                <span style={{ fontSize: 11, color: '#6b6b66', fontWeight: 600, background: '#f8f7f4', padding: '3px 10px', borderRadius: 20 }}>{m.date}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {m.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 13, color: '#444', padding: '4px 0 4px 16px', position: 'relative', lineHeight: 1.6 }}>
                    <span style={{ position: 'absolute', left: 0, color: m.color, fontWeight: 700 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}