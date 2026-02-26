import React, { useMemo, useState } from 'react';

function EmployeeTable({ employees }) {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = useMemo(() => {
    const unique = new Set(employees.map((emp) => emp.department));
    return ['all', ...Array.from(unique)];
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesDept = departmentFilter === 'all' || emp.department === departmentFilter;
      const matchesSearch =
        !searchTerm ||
        emp.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
      return matchesDept && matchesSearch;
    });
  }, [employees, departmentFilter, searchTerm]);

  const getStatusClass = (status) => {
    if (status === 'Critical') return 'status-critical';
    if (status === 'Excellent') return 'status-excellent';
    return 'status-average';
  };

  return (
    <section className="employee-section">
      <div className="employee-section-header">
        <h2>Employees</h2>
        <p className="section-subtitle">
          Filter and search employees to review attendance and productivity.
        </p>
      </div>

      <div className="employee-filters">
        <label className="filter-control">
          <span>Department</span>
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-control">
          <span>Search by Name</span>
          <input
            type="text"
            placeholder="Type employee name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Attendance %</th>
              <th>Productivity %</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.attendancePercentage}%</td>
                <td>{emp.productivityScore}%</td>
                <td>
                  <span className={`status-badge ${getStatusClass(emp.status)}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="5" className="table-empty">
                  No employees match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EmployeeTable;

