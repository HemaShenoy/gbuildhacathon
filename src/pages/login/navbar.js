import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './nav.css';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/test-score-tracker">Test Score Tracker</Link></li>
        <li><Link to="/attendance-management">Attendance Management</Link></li>
        <li><Link to="/expense-tracker">Expense Tracker</Link></li>
        <li><Link to="/deadline-reminders">Deadline Reminders</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;



