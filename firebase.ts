// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Kl6NkYeUzXXbnMjaAJkkZ-OW12CYcfQ",
  authDomain: "newsmeai.firebaseapp.com",
  projectId: "newsmeai",
  storageBucket: "newsmeai.appspot.com",
  messagingSenderId: "781877118436",
  appId: "1:781877118436:web:d5a5846543b9caf7a1b3f1",
  measurementId: "G-1ZDDDJSQRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
