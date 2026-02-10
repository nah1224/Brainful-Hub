// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
