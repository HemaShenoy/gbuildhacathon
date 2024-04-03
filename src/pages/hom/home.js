import React from 'react';
import { auth } from '../../firebase'; // Adjust the path based on your file structure

const Home = () => {
  const handleSignOut = () => {
    auth.signOut(); // Sign out the current user
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your home page content.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
