// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAwCWJzfMhQ1BWVje_F_ziVDt5Qbevg4aQ",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "video-meeting-app-c5ebd.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "video-meeting-app-c5ebd",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "video-meeting-app-c5ebd.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "681395725391",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:681395725391:web:8afff8bee1ae5ed6ab363a",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-ME3LQPVG7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);