import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase.js'; // Assuming firebase.js is located in the src directory
import LoginPage from './loginpage.js'; // Assuming loginpage.js is located in the src/pages directory


const Home = () => {
  const [user, setUser] = useState(null); // State to track user login status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state based on authentication status
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the current user
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle sign-out error if needed
    }
  };

  return (
    <div>
      {user ? ( // If user is logged in, show home content
        <>
          
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <LoginPage /> // If user is not logged in, render the login page
      )}
    </div>
  );
};

export default Home;
