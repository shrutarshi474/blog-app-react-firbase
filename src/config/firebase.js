// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtf91b19a-ILUB4k9RW-W5FW3VDRE6yb4",
  authDomain: "greenokeeper-785ab.firebaseapp.com",
  projectId: "greenokeeper-785ab",
  storageBucket: "greenokeeper-785ab.appspot.com",
  messagingSenderId: "273772935292",
  appId: "1:273772935292:web:c6c98162539d86cb89f1f9",
  measurementId: "G-ZJDM1984EX",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
