import RouteMap from './components/RouteMap'
import DriverProfiles from './components/DriverProfiles'
import { useState } from 'react'
import Dashboard from './components/Dashboard'


const TABS = [
  { id: 'dashboard',    label: 'Dashboard' },
  { id: 'value',        label: 'Value Proposition' },
  { id: 'drivers',      label: 'Driver Profiles' },
  { id: 'map',          label: 'Route Map' },
  { id: 'optimization', label: 'Optimization' },
  { id: 'mobile',       label: 'Driver Mobile App' },
  { id: 'predict',      label: 'Predictive Positioning' },
  { id: 'report',       label: 'Summary Report' },
  { id: 'journey',      label: 'Project Journey' },
]

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div style={{ fontFamily: 'Segoe UI, system-ui, sans-serif', background: '#f8f7f4', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 16px 0' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600 }}>J. HAMMERHEAD TRUCKING LLC</h1>
        <p style={{ fontSize: 16, fontWeight: 500, marginTop: 3, color: '#444' }}>
          Empty Miles Tracker — NY/NJ/PA/CT Freight · 6 drivers · 25 trips · 30-day window
        </p>
      </div>

      {/* Tabs */}
      <div style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.1)', zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 2, padding: '0 16px', overflowX: 'auto' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '14px 20px',
                fontSize: 13,
                fontWeight: 500,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '3px solid #185fa5' : '3px solid transparent',
                color: activeTab === tab.id ? '#185fa5' : '#6b6b66',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Panel */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'drivers' && <DriverProfiles />}
        {activeTab === 'map' && <RouteMap />}
        {activeTab !== 'dashboard' && activeTab !== 'drivers' && activeTab !== 'map' && (
        
          <>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a18' }}>
              {TABS.find(t => t.id === activeTab)?.label}
            </h2>
            <p style={{ color: '#6b6b66', marginTop: 8 }}>This tab is coming soon.</p>
          </>
        )}
      </div>

    </div>
  )
}

export default App