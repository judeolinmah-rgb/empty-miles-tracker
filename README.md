# Empty Miles Tracker
### J. Hammerhead Trucking LLC — NY/NJ/PA/CT Freight Operations

A fleet management and empty miles optimization dashboard for independent owner-operators running freight in the New York, New Jersey, Pennsylvania, and Connecticut corridor.

---

## What It Does

Empty miles (also called deadhead miles) are trips where a truck runs without a paying load. For small fleets, this is one of the biggest controllable costs in the business. This app tracks empty miles across a 6-driver fleet, identifies problem lanes and hubs, and surfaces load matching opportunities to reduce waste.

---

## Features

| Tab | Description |
|-----|-------------|
| **Dashboard** | Fleet KPIs, trip log, empty mile rate at a glance |
| **Value Proposition** | Solo operator vs. coordinated fleet comparison |
| **Driver Profiles** | Per-driver stats, empty rate, and performance bars |
| **Route Map** | Interactive SVG map of all routes — click any line for trip details |
| **Optimization** | Adjustable reduction target with before/after savings calculator and load match suggestions |
| **Driver Mobile App** | Feature overview of the driver-facing mobile interface |
| **Predictive Positioning** | Driver and hub risk assessment with recommended actions |
| **Summary Report** | Printable fleet report with findings and recommendations |
| **Project Journey** | Timeline of how the product was built and where it's going |

---

## Tech Stack

- **React** — component-based UI
- **Vite** — fast development server and build tool
- **Vanilla CSS-in-JS** — no external UI library
- **Chart.js** — coming in Phase 2
- **Supabase** — coming in Phase 2 (database + auth)

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/judeolinmah-rgb/empty-miles-tracker.git

# Move into the project folder
cd empty-miles-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Status

**Phase 1 — Complete**
- React + Vite migration from single HTML file
- All 9 tabs built as modular React components
- Data centralized in `src/data.js`
- Deployed to GitHub

**Phase 2 — In Progress**
- Supabase backend for real data persistence
- User authentication (driver vs. dispatch roles)
- Live deployment to Vercel
- Real driver onboarding and live trip data

---

## Fleet Overview

- **6 drivers** — CDL-A owner-operators based in NJ and NY
- **25 trips** — 30-day tracking window
- **5 primary hubs** — Port Newark, Hunts Point, Meadowlands, Edison NJ, JFK Cargo
- **Current empty rate** — 38.5% (fleet target: 25%)

---

*Built by J. Hammerhead Trucking LLC · Confidential*
