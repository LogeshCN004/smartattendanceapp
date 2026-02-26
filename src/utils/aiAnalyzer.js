// Utility functions that simulate AI-based attendance and productivity analysis on the frontend.

// Analyze a single employee and derive status and insight message based on thresholds.
export function analyzeEmployee(employee) {
  const { name, attendancePercentage, productivityScore, workingHours, lateDays } = employee;

  let status = 'Average';
  let insight =
    'Performance and attendance are within the normal range. Continue to monitor for trends over time.';

  if (attendancePercentage < 70 && productivityScore < 60) {
    status = 'Critical';
    insight =
      `${name} is showing low attendance and productivity. Consider a focused discussion to understand blockers, ` +
      'review workload, or provide additional support.';
  } else if (attendancePercentage > 85 && productivityScore > 80) {
    status = 'Excellent';
    insight =
      `${name} demonstrates strong attendance and high productivity. Recognize their contribution and explore ways to ` +
      'scale their impact across the team.';
  } else if (lateDays > 5) {
    status = 'Average';
    insight =
      `${name} has frequent late arrivals. Consider flexible scheduling or coaching to prevent long-term impact on productivity.`;
  } else if (workingHours > 44) {
    status = 'Average';
    insight =
      `${name} is consistently working long hours. Monitor for burnout risk and validate whether workload is sustainable.`;
  }

  return {
    ...employee,
    status,
    insight
  };
}

// Analyze the complete employee list and derive organization-level insights.
export function analyzeEmployees(employees) {
  // Enrich each employee with status and insight.
  const enrichedEmployees = employees.map((emp) => analyzeEmployee(emp));

  const totalEmployees = enrichedEmployees.length;

  const presentToday = enrichedEmployees.filter(
    (emp) => emp.attendancePercentage > 75
  ).length;

  const totalProductivity = enrichedEmployees.reduce(
    (sum, emp) => sum + emp.productivityScore,
    0
  );

  const averageProductivity =
    totalEmployees > 0 ? totalProductivity / totalEmployees : 0;

  const atRiskEmployees = enrichedEmployees.filter(
    (emp) => emp.status === 'Critical'
  );

  const topPerformer = enrichedEmployees.reduce((best, current) => {
    if (!best) return current;

    if (current.productivityScore !== best.productivityScore) {
      return current.productivityScore > best.productivityScore ? current : best;
    }

    return current.attendancePercentage > best.attendancePercentage
      ? current
      : best;
  }, null);

  return {
    employees: enrichedEmployees,
    summary: {
      totalEmployees,
      presentToday,
      averageProductivity,
      atRiskEmployees,
      topPerformer
    }
  };
}

