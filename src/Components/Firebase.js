// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASToP7JHJVX_GLEecDZhrarYZaMGyDhts",
  authDomain: "login-auth-332a0.firebaseapp.com",
  projectId: "login-auth-332a0",
  storageBucket: "login-auth-332a0.appspot.com",
  messagingSenderId: "301905332699",
  appId: "1:301905332699:web:6f6757025aface50717ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;