// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnMYR2wQSMB79M0KRsHYe8Vh5N9ReF0UE",
  authDomain: "instagram-clone-7462c.firebaseapp.com",
  projectId: "instagram-clone-7462c",
  storageBucket: "instagram-clone-7462c.appspot.com",
  messagingSenderId: "28974902905",
  appId: "1:28974902905:web:e75e9a85d9615593bc6ea8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

/* import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; */
