import './App.css';
import React, { useState, useEffect } from 'react';
import SignIn from './pages/login/loginpage';
import Navigation from './pages/hom/home';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (user === null) {
    return <SignIn />;
  } else {
    return <Navigation />;
  }
}

export default App;
