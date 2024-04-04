import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase'; // Make sure to import your Firebase app instance correctly
import './App.css';
import Home from './pages/login/home'; // Adjust the import path for the Home component
import SignIn from './pages/login/loginpage'; // Adjust the import path for the SignIn component
import NavBar from './pages/login/navbar.js'; // Import your navigation bar component

// Import other components for routings
import TestScoreTracker from './pages/Testscoretracker.js';
import AttendanceManagement from './pages/AttendanceManagement';
import ExpenseTracker from './pages/ExpenseTracker';
import DeadlineReminders from './pages/DeadlineReminders';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state based on authentication status
    });

    return () => {
      unsubscribe(); // Unsubscribe from auth state changes when component unmounts
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to studymate!</h1>
        </header>
        <main>
          {user && <NavBar />} {/* Render NavBar only if user is logged in */}
          <Routes>
            {/* Define routes for other pages */}
            <Route path="/" element={user ? <Home /> : <SignIn />} /> {/* Use "element" prop for rendering components */}
            <Route path="/test-score-tracker" element={<TestScoreTracker />} />
            <Route path="/attendance-management" element={<AttendanceManagement />} />
            <Route path="/expense-tracker" element={<ExpenseTracker />} />
            <Route path="/deadline-reminders" element={<DeadlineReminders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;