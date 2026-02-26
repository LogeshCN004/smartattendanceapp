import React from 'react';

function Sidebar({ activeSection, onSectionChange }) {
  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'employees', label: 'Employees' },
    { id: 'ai-insights', label: 'AI Insights' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">SAP</span>
        <span className="sidebar-title">Smart Analyzer</span>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <button
            key={link.id}
            className={`sidebar-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => onSectionChange(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <span className="sidebar-footnote">v1.0 • Frontend Demo</span>
      </div>
    </aside>
  );
}

export default Sidebar;

