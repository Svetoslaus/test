// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNt8neuGtzRbftC0Eh4JrYuY1OsMPfms",
  authDomain: "find-me-1080e.firebaseapp.com",
  projectId: "find-me-1080e",
  storageBucket: "find-me-1080e.appspot.com",
  messagingSenderId: "290718960184",
  appId: "1:290718960184:web:1e47eed92fa63f3896b4cd"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);