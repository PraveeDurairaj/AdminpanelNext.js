import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAFR6PE6oT43kCC5cKGD7me0jWilM0PR2w",
    authDomain: "portfolio-68fcb.firebaseapp.com",
    projectId: "portfolio-68fcb",
    storageBucket: "portfolio-68fcb.firebasestorage.app",
    messagingSenderId: "822314269728",
    appId: "1:822314269728:web:c8d30c29404278135bd045",
    measurementId: "G-1Z7LS05QC7"
  };

  initializeApp(firebaseConfig)
  const db = getFirestore()
  export {db}