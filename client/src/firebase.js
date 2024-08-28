// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8e110.firebaseapp.com",
  projectId: "mern-blog-8e110",
  storageBucket: "mern-blog-8e110.appspot.com",
  messagingSenderId: "214734001938",
  appId: "1:214734001938:web:94e2949ab40233e04ac5cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);