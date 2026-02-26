import React from 'react';

function DashboardCards({ totalEmployees, presentToday, averageProductivity, atRiskCount }) {
  const cards = [
    {
      label: 'Total Employees',
      value: totalEmployees,
      detail: 'Overall headcount',
      tone: 'neutral'
    },
    {
      label: 'Present Today',
      value: presentToday,
      detail: 'Attendance > 75%',
      tone: 'success'
    },
    {
      label: 'Average Productivity',
      value: `${averageProductivity.toFixed(1)}%`,
      detail: 'Team-wide score',
      tone: 'info'
    },
    {
      label: 'Employees at Risk',
      value: atRiskCount,
      detail: 'Need attention',
      tone: atRiskCount > 0 ? 'warning' : 'success'
    }
  ];

  return (
    <section className="cards-grid">
      {cards.map((card) => (
        <article key={card.label} className={`card card-${card.tone}`}>
          <h3 className="card-label">{card.label}</h3>
          <p className="card-value">{card.value}</p>
          <p className="card-detail">{card.detail}</p>
        </article>
      ))}
    </section>
  );
}

export default DashboardCards;

