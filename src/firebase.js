// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMcISNIqPldXwZIaJAHJ79OJuaJeTHGKs",
  authDomain: "workshop-funcional-solutions.firebaseapp.com",
  projectId: "workshop-funcional-solutions",
  storageBucket: "workshop-funcional-solutions.appspot.com",
  messagingSenderId: "105794122963",
  appId: "1:105794122963:web:7249778daec96cb9989026",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
