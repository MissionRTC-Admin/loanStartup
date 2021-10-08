// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRRyPWwZbbx2yXRuZTIFRkiAnIkb1gFPU",
  authDomain: "loan-startup.firebaseapp.com",
  projectId: "loan-startup",
  storageBucket: "loan-startup.appspot.com",
  messagingSenderId: "936621371728",
  appId: "1:936621371728:web:d45cd9972a7494d7e0fc55",
  measurementId: "G-S1EFT48Q3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }