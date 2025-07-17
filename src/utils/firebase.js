// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeCY2C2XBeI9tXU1dMkBfeeL0Ru5sZtdE",
  authDomain: "netflixgpt-eb9fc.firebaseapp.com",
  projectId: "netflixgpt-eb9fc",
  storageBucket: "netflixgpt-eb9fc.firebasestorage.app",
  messagingSenderId: "1094355428444",
  appId: "1:1094355428444:web:17f08c2f4f542d456ab299",
  measurementId: "G-6B458CFFH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();