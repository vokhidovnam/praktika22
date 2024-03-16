// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "praktika22-fd05a.firebaseapp.com",
  projectId: "praktika22-fd05a",
  storageBucket: "praktika22-fd05a.appspot.com",
  messagingSenderId: "89359166487",
  appId: "1:89359166487:web:b518313a817bc9ab248052"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);