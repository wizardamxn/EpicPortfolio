// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAljDbZfcsOIQm5OHb2uPr1DFLwKdmRBJs",
  authDomain: "epicportfolio-abd55.firebaseapp.com",
  projectId: "epicportfolio-abd55",
  storageBucket: "epicportfolio-abd55.firebasestorage.app",
  messagingSenderId: "583728071994",
  appId: "1:583728071994:web:6c537985fb2f40e14f3c03",
  measurementId: "G-70KC28SM9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);