// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3i4czfiEkdQiWDCfmA-Kp1KoJg1k0_0w",
  authDomain: "portfolio-6b0cc.firebaseapp.com",
  projectId: "portfolio-6b0cc",
  storageBucket: "portfolio-6b0cc.firebasestorage.app",
  messagingSenderId: "1000178985636",
  appId: "1:1000178985636:web:5179005063f1a9d6d8d431",
  measurementId: "G-48CK369SSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export {fireDB, app } ;
