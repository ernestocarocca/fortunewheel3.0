
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAiOwC_LQ-yRqMqb5C8nH5JVEZenYMPQ8g",
  authDomain: "fortunewheelprojekt.firebaseapp.com",
  projectId: "fortunewheelprojekt",
  storageBucket: "fortunewheelprojekt.appspot.com",
  messagingSenderId: "541430000712",
  appId: "1:541430000712:web:ff9351352aeb46fbf4fc7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 
