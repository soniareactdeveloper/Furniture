// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv3sqK8JhCk2OhiQLuzp8J_o5aNovjLOA",
  authDomain: "furniture-ee2fa.firebaseapp.com",
  projectId: "furniture-ee2fa",
  storageBucket: "furniture-ee2fa.appspot.com",
  messagingSenderId: "177875392126",
  appId: "1:177875392126:web:24433b143503885bfaea2f",
  measurementId: "G-79H394TMNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };