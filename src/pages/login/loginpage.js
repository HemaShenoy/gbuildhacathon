import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
import React, { useState } from 'react';
import './sign.css'; 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function LoginPage() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                setSuccess(true); // Set success to true after successful login
                redirectToHome(); // Redirect to home page
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const redirectToHome = () => {
        window.location.href = '/home'; // Redirect to the home page
    };

    return (
        <div className="login-container">
            <h2>Student Login</h2>
            {success ? ( // If success is true, show success message
                <p className="success-message">Login successful!</p>
            ) : ( // Otherwise, show the login button
                <button type="button" onClick={googleSignIn} className="google-login-button">
                    Sign in with Google
                </button>
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default LoginPage;
