"use client";

import { auth } from "../firebase/firebaseConfig";
import { FirebaseError } from "firebase/app";
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
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<UserState>({ currentUser: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser({
        currentUser: currentUser ? { email: currentUser.email } : null,
      });
    });

    // Cleanup subscription on component unmount
    // commment more oeeoeoeo
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
  const handleLoginClick = async () => {
    setLoading(true); // Sätt loading till true när användaren klickar på knappen
    await login(); // Vänta tills login har körts
    setLoading(false); // Sätt loading till false efter att login har körts
  };
  return (
    <main className="flex   min-h-screen justify-center items-center relative  p-24">
     
      <div className="flex flex-col  h-[450px] w-[250px] rounded-[25px] ">
        <h3 className="pt-3 flex justify-center items-center">Register User</h3>
        <input type="checkbox" className="checkbox checkbox-secondary pl-1" />
        <input
          className="modern-input mt-9 "
          type="text"
          placeholder="Namn..."
        />
        <input
          className="modern-input pt-9 "
          type="email"
          placeholder="E-post..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          className="modern-input pt-9 "
          type="tel"
          placeholder="Telefonnummer..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register} className="btn btn-accent btn-outline">
          Sign Up
        </button>
      </div>
    </main>
  );
}
