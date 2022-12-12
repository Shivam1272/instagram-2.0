// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoxn1gfYfXNSTqxGQaSn09zEwtudLs0-Q",
  authDomain: "instagram-ac5eb.firebaseapp.com",
  projectId: "instagram-ac5eb",
  storageBucket: "instagram-ac5eb.appspot.com",
  messagingSenderId: "277021542329",
  appId: "1:277021542329:web:bd2e296eafb34efe379868",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
