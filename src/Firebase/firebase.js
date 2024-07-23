// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwvlbbV5FrytUzF3RbVmnSY7sa2pMtP1c",
  authDomain: "expense-tracker-3da7b.firebaseapp.com",
  projectId: "expense-tracker-3da7b",
  storageBucket: "expense-tracker-3da7b.appspot.com",
  messagingSenderId: "336160449418",
  appId: "1:336160449418:web:9d65655ea971c8c137de73",
  measurementId: "G-1YFG954JD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);