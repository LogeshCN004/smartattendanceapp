import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const monthlyData = [
  { month: 'Jan', attendance: 92, productivity: 82 },
  { month: 'Feb', attendance: 89, productivity: 80 },
  { month: 'Mar', attendance: 94, productivity: 85 },
  { month: 'Apr', attendance: 90, productivity: 78 },
  { month: 'May', attendance: 88, productivity: 76 },
  { month: 'Jun', attendance: 91, productivity: 83 },
  { month: 'Jul', attendance: 87, productivity: 74 },
  { month: 'Aug', attendance: 93, productivity: 86 },
  { month: 'Sep', attendance: 90, productivity: 79 },
  { month: 'Oct', attendance: 92, productivity: 81 },
  { month: 'Nov', attendance: 89, productivity: 77 },
  { month: 'Dec', attendance: 91, productivity: 84 }
];

function Charts() {
  return (
    <section className="charts-section">
      <div className="charts-grid">
        <article className="chart-card">
          <h3>Attendance Trend</h3>
          <p className="section-subtitle">
            Monthly attendance percentage across the organization.
          </p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="chart-card">
          <h3>Productivity Trend</h3>
          <p className="section-subtitle">
            Overall productivity score trend aligned with attendance.
          </p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis domain={[60, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="productivity"
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Charts;

