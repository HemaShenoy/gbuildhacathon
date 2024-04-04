import React, { useEffect, useState } from 'react';
import SignIn from './pages/login/loginpage'; // Adjust the import path for LoginPage
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Correct import for Firebase auth
import { app } from './firebase'; // Import the Firebase app instance
import './App.css';
import Home from './pages/login/home.js'; // Import your Home component or any other component for authenticated users

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
    <div className="App">
      <header>
        <h1>Welcome!</h1>
      </header>
      <main>
        {user ? <Home /> : <SignIn />} {/* Render different components based on authentication state */}
      </main>
    </div>
  );
}

export default App;
