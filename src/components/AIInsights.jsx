import React from 'react';

function AIInsights({ summary }) {
  const { averageProductivity, atRiskEmployees, topPerformer } = summary;

  return (
    <section className="ai-section">
      <div className="ai-header">
        <h2>AI Insights</h2>
        <p className="section-subtitle">
          Simulated AI analysis highlighting key attendance and productivity patterns.
        </p>
      </div>

      <div className="ai-grid">
        <article className="ai-card ai-card-primary">
          <h3>Overall Productivity</h3>
          <p className="ai-main-metric">{averageProductivity.toFixed(1)}%</p>
          <p className="ai-description">
            The team is operating at an aggregated productivity score based on working hours and
            performance trends.
          </p>
        </article>

        <article className="ai-card ai-card-highlight">
          <h3>Top Performer</h3>
          {topPerformer ? (
            <>
              <p className="ai-employee-name">{topPerformer.name}</p>
              <p className="ai-employee-meta">
                {topPerformer.department} • {topPerformer.productivityScore}% productivity •{' '}
                {topPerformer.attendancePercentage}% attendance
              </p>
              <p className="ai-description">
                This employee shows consistently strong attendance and high productivity, making
                them a potential mentor or benchmark for others.
              </p>
            </>
          ) : (
            <p className="ai-description">Not enough data to identify a top performer.</p>
          )}
        </article>

        <article className="ai-card ai-card-warning">
          <h3>Employees At Risk</h3>
          {atRiskEmployees.length > 0 ? (
            <>
              <p className="ai-main-metric">{atRiskEmployees.length}</p>
              <ul className="ai-list">
                {atRiskEmployees.map((emp) => (
                  <li key={emp.id}>
                    <span className="ai-list-name">{emp.name}</span>
                    <span className="ai-list-meta">
                      {emp.department} • {emp.attendancePercentage}% attendance •{' '}
                      {emp.productivityScore}% productivity
                    </span>
                  </li>
                ))}
              </ul>
              <p className="ai-description">
                These employees show low attendance and productivity. Consider 1:1 check-ins,
                workload review, or targeted coaching.
              </p>
            </>
          ) : (
            <p className="ai-description">
              No employees are currently flagged as at-risk based on the configured thresholds.
            </p>
          )}
        </article>
      </div>
    </section>
  );
}

export default AIInsights;

