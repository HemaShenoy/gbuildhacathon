import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the path based on your file structure

const Home = () => {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Redirect to the login page after signing out
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/test scre tracker/test">Test Tracker</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/expense-tracker">Expense Tracker</Link>
          </li>
          <li>
            <Link to="/deadline-reminders">Deadline Reminders</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the Home Page</h1>
      <p>This is your home page content.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
