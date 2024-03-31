// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJqYhvu0jvC7uDYecQ7TOkCWnDrkThVV8",
  authDomain: "foodfire-c9888.firebaseapp.com",
  projectId: "foodfire-c9888",
  storageBucket: "foodfire-c9888.appspot.com",
  messagingSenderId: "875051316026",
  appId: "1:875051316026:web:6f3913a4f58324c2f75603",
  measurementId: "G-T50RETVE2B"
};

// Initialize Firebase
const app = inyitializeApp(firebaseConfig);
const analytics = getAnalytics(app);