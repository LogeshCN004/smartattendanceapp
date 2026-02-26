import React, { useMemo, useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import DashboardCards from '../components/DashboardCards.jsx';
import EmployeeTable from '../components/EmployeeTable.jsx';
import AIInsights from '../components/AIInsights.jsx';
import Charts from '../components/Charts.jsx';
import employeesData from '../data/employees.js';
import { analyzeEmployees } from '../utils/aiAnalyzer.js';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Run the AI-style analysis once using memoization to avoid unnecessary recalculation.
  const { employees, summary } = useMemo(
    () => analyzeEmployees(employeesData),
    []
  );

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={sidebarOpen ? 'dashboard-shell sidebar-open' : 'dashboard-shell'}>
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="dashboard-main">
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <main className="dashboard-content">
          {activeSection === 'dashboard' && (
            <>
              <DashboardCards
                totalEmployees={summary.totalEmployees}
                presentToday={summary.presentToday}
                averageProductivity={summary.averageProductivity}
                atRiskCount={summary.atRiskEmployees.length}
              />
              <Charts />
            </>
          )}

          {activeSection === 'employees' && <EmployeeTable employees={employees} />}

          {activeSection === 'ai-insights' && <AIInsights summary={summary} />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

