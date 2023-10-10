"use client";

import { error } from "console";
import { auth } from "../firebase/firebaseConfig";
import { FirebaseError } from "firebase/app";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Image from "next/image";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

interface UserState {
  currentUser: {
    email: string | null;
  } | null;
}
const SignInOrSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<UserState>({ currentUser: null });

  const sendLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const actionCodeSettings = {
      url: window.location.href,  // Här ska du specificera URL:en där användaren ska skickas efter att de klickat på länken
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
  };

 

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };
  
  return (
    <form onSubmit={sendLink}>
    <h2>Sign In or Sign Up</h2>
    <p>Enter your email address to sign in or create a new account.</p>
    <input 
      type="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your Email"
    />
    <button type="submit">Send sign-in link</button>
  </form>
);
  
}
export default SignInOrSignUp;