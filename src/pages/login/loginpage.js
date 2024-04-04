import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './sign.css'; 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function LoginPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setSuccess(true);
        // No need to use history here, just setSuccess to true
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  function HomePage() {
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
  }

  // handleSignOut function
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
    <div className="login-container">
      <h2>Student Login</h2>
      {success ? (
        <HomePage /> // Render HomePage if login is successful
      ) : (
        <button type="button" onClick={googleSignIn} className="yess google-login-button">
          Sign in with Google
        </button>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LoginPage;
