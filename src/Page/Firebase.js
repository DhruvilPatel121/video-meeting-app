// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCWJzfMhQ1BWVje_F_ziVDt5Qbevg4aQ",
  authDomain: "video-meeting-app-c5ebd.firebaseapp.com",
  projectId: "video-meeting-app-c5ebd",
  storageBucket: "video-meeting-app-c5ebd.firebasestorage.app",
  messagingSenderId: "681395725391",
  appId: "1:681395725391:web:8afff8bee1ae5ed6ab363a",
  measurementId: "G-ME3LQPVG7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);