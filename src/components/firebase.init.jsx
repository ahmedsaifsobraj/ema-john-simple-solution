import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-UDqXUsICU0ge7AEJzggV1SVRztoAWE",
  authDomain: "ema-john-simple-solution.firebaseapp.com",
  projectId: "ema-john-simple-solution",
  storageBucket: "ema-john-simple-solution.appspot.com",
  messagingSenderId: "640352248790",
  appId: "1:640352248790:web:3158d8779f0185efd0fa77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;