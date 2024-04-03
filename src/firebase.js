// eslint-disable-next-line
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


import { getFirestore } from 'firebase/firestore';







const firebaseConfig = {
  apiKey: "AIzaSyBdSf7ruLBiRDIpGgATsyROjQArcKGLfTw",
  authDomain: "g-build-f99a6.firebaseapp.com",
  projectId: "g-build-f99a6",
  storageBucket: "g-build-f99a6.appspot.com",
  messagingSenderId: "839976964036",
  appId: "1:839976964036:web:fe749b3d2314b5e8e19e91",
  measurementId: "G-BBW83N05JT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { app, analytics, auth, db };



