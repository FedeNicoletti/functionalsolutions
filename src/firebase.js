// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLgTFziKKkpKcz64gEu8HxB0GnnAKqAJE",
  authDomain: "testing-117dc.firebaseapp.com",
  projectId: "testing-117dc",
  storageBucket: "testing-117dc.appspot.com",
  messagingSenderId: "1047099105226",
  appId: "1:1047099105226:web:a0040620c2bfa4836a3933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
