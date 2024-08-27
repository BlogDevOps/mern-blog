// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// You can import other Firebase products you need here
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "berny-blog.firebaseapp.com",
  projectId: "berny-blog",
  storageBucket: "berny-blog.appspot.com",
  messagingSenderId: "886903747955",
  appId: "1:886903747955:web:c97bdcba6ba9d440120106",
  measurementId: "G-S4WMBPPB8P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// If you need analytics, uncomment the following line
// export const analytics = getAnalytics(app);
