import React, { useEffect } from 'react';
import SignIn from './pages/login/loginpage'; // Adjust the import path for LoginPage
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Correct import for Firebase auth
import { app } from './firebase'; // Import the Firebase app instance
import './App.css'; 

const auth = getAuth(app);

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Handle authentication state changes here
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
        <SignIn />
      </main>
    </div>
  );
}

export default App;

