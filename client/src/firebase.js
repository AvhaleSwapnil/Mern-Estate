// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-84cb1.firebaseapp.com",
  projectId: "mern-estate-84cb1",
  storageBucket: "mern-estate-84cb1.appspot.com",
  messagingSenderId: "938980820128",
  appId: "1:938980820128:web:58ed860df2b027e518f5c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
