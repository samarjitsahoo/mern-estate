// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-3c9c6.firebaseapp.com",
    projectId: "mern-estate-3c9c6",
    storageBucket: "mern-estate-3c9c6.firebasestorage.app",
    messagingSenderId: "614978374788",
    appId: "1:614978374788:web:b3514d1dd39ab075d086d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);