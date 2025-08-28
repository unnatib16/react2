// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyCLj0caJhRGiGIuCe1u-BiPfoIsUNLkXgo",
  authDomain: "registration-c2175.firebaseapp.com",
  projectId: "registration-c2175",
  storageBucket: "registration-c2175.firebasestorage.app",
  messagingSenderId: "708601456317",
  appId: "1:708601456317:web:e846c3b667b97610a8b9d4",
  measurementId: "G-QEFW1W417Y"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Authentication
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// ✅ Firestore
export const db = getFirestore(app);

export default app;


