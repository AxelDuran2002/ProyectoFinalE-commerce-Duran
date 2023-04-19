import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_c4oubJm19IBLPZlmofVGrHN5u6VlHQc",
  authDomain: "proyectofinale-commerce-duran.firebaseapp.com",
  projectId: "proyectofinale-commerce-duran",
  storageBucket: "proyectofinale-commerce-duran.appspot.com",
  messagingSenderId: "727394577292",
  appId: "1:727394577292:web:3a7f93be03ac7bdcaf04a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()