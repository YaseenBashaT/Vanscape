
// Import the functions needed from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mgOpaGPVt4qFEfjOr8Trh7UbGCkC_WI",
  authDomain: "vacay-vanscape.firebaseapp.com",
  projectId: "vacay-vanscape",
  storageBucket: "vacay-vanscape.firebasestorage.app",
  messagingSenderId: "138412592736",
  appId: "1:138412592736:web:b980aff4aa2fbb6eeafd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
