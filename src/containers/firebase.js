// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEVAf1cAB-YQqe9HXLjwpJ2IkNfdtppmI",
  authDomain: "enzodia-ae161.firebaseapp.com",
  projectId: "enzodia-ae161",
  storageBucket: "enzodia-ae161.appspot.com",
  messagingSenderId: "937954969630",
  appId: "1:937954969630:web:e406c1f531623c4a7ac60f",
  measurementId: "G-6B6924T9VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);