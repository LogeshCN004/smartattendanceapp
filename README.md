## Smart Attendance and Productivity Analyzer

Smart Attendance and Productivity Analyzer is a **frontend-only React dashboard** that simulates AI-based analysis of employee attendance and productivity. It is designed to be **clean, modern, and interview-ready**, showcasing dashboard layout, charts, filtering, and modular React architecture.

---

### Project Overview

This project provides:

- A **login screen** with basic validation.
- A **dashboard** with key workforce metrics.
- A simulated **AI insights** panel that classifies employees as _Excellent_, _Average_, or _Critical_ based on attendance and productivity.
- **Interactive employee table** with search and department filtering.
- **Charts** visualizing attendance and productivity trends using Recharts.

The AI logic is simulated completely on the frontend and is meant as a demonstration of how an analytics product might look and feel.

---

### Features

- **Login Page**
  - Email and password inputs with simple client-side validation.
  - Centered card layout with modern, minimal styling.
  - On successful submit, user is redirected to the dashboard.

- **Dashboard Layout**
  - **Sidebar** with navigation (Dashboard, Employees, AI Insights) and active state styling.
  - **Navbar** with project title and profile placeholder.
  - Responsive shell that adapts from desktop to mobile.

- **AI-based Analyzer (Simulated)**
  - Classifies employees as **Critical**, **Average**, or **Excellent** based on thresholds.
  - Generates a **per-employee insight message**.
  - Provides:
    - List of **employees at risk**.
    - **Average productivity** across the organization.
    - **Top performer** based on productivity and attendance.

- **Dashboard Cards**
  - Total Employees.
  - Present Today (attendance &gt; 75%).
  - Average Productivity.
  - Employees at Risk.
  - Responsive grid layout with soft shadows and rounded cards.

- **Employee Table**
  - Columns for name, department, attendance %, productivity %, and AI status.
  - **Search by name** and **filter by department**.
  - Colored status badges: red (Critical), orange (Average), green (Excellent).

- **AI Insights Section**
  - Summary of average productivity.
  - Highlighted **top performer**.
  - List of **at-risk employees** with key metrics.
  - Alert-style cards with subtle colors for quick visual scanning.

- **Charts (Recharts)**
  - Monthly **Attendance Trend** bar chart.
  - Monthly **Productivity Trend** line chart.
  - Simple, minimal configuration suitable for interview demos.

---

### Tech Stack

- **React** (functional components, hooks)
- **JavaScript** (no TypeScript)
- **Vite** (for fast dev and build)
- **Recharts** (for charts)
- **Plain CSS** (no Tailwind, no external UI library)

---

### Folder Structure

```text
src/
 ├── components/
 │     ├── Sidebar.jsx
 │     ├── Navbar.jsx
 │     ├── DashboardCards.jsx
 │     ├── EmployeeTable.jsx
 │     ├── AIInsights.jsx
 │     ├── Charts.jsx
 │
 ├── pages/
 │     ├── Login.jsx
 │     ├── Dashboard.jsx
 │
 ├── data/
 │     ├── employees.js
 │
 ├── utils/
 │     ├── aiAnalyzer.js
 │
 ├── App.jsx
 ├── main.jsx
 ├── App.css
```

---

### How to Run

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open in browser**

   Vite will show you a local URL in the terminal, usually `http://localhost:5173`.

4. **Login**

   - Use any email (e.g. `admin@company.com`) and any password.
   - Basic validation only checks for non-empty values and email format.

---

### Code Architecture Notes

- All UI is built with **functional components**.
- **Hooks** (`useState`, `useMemo`) are used for local state and derived data.
- The AI analyzer lives in a dedicated utility (`utils/aiAnalyzer.js`) to separate logic from presentation.
- Dummy data is centralized in `data/employees.js` for easy tweaking.
- Styling is in a single `App.css` file using semantic class names and responsive media queries.

---

### Future Scope

This project is intentionally frontend-only, but it has a clear path for extension:

- **Backend Integration (Node + MongoDB)**
  - Persist employees, attendance logs, and productivity metrics.
  - Build secure APIs to fetch analytics data.

- **Real AI Model Integration**
  - Replace simple threshold logic with ML models (e.g. anomaly detection, forecasting).
  - Serve models via a Python/Node microservice.

- **Facial Recognition Attendance**
  - Integrate camera-based facial recognition for automated check-in/out.
  - Use external services or custom CV models.

- **Role-Based Access Control**
  - Different views for Admin, Manager, and Employee.
  - Fine-grained permissions for editing or viewing sensitive data.

- **Real-time Analytics**
  - WebSocket-based live updates for ongoing attendance and productivity changes.
  - Streaming charts and real-time alerts for at-risk employees.

---

### License

This project is intended for learning, interview demos, and internal experimentation. Add a license of your choice if you plan to use it in production.

