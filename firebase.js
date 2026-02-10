// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6AS1Nztjj0KWdtOxwPpxt0dIWrvZQgQo",
  authDomain: "brainful-hub.firebaseapp.com",
  projectId: "brainful-hub",
  storageBucket: "brainful-hub.firebasestorage.app",
  messagingSenderId: "908048838702",
  appId: "1:908048838702:web:6fef1bd5222d8cc9aaefbf",
  measurementId: "G-EEBYYWE6F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Initialize Firebase Auth (for login)
export const auth = getAuth(app);

// 🔹 Initialize Firestore (for exams, results)
export const db = getFirestore(app);
