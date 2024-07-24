// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWVhJtApmOJJb2AAbSCI8fdWN0AldE_6Y",
  authDomain: "my-app-333fd.firebaseapp.com",
  projectId: "my-app-333fd",
  storageBucket: "my-app-333fd.appspot.com",
  messagingSenderId: "1006006702427",
  appId: "1:1006006702427:web:8302bfcdcdbb185e4f8a7e"
};

// Iniialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;