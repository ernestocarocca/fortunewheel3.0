"use client";
import React from "react";
import SignUp from "./signUp/page";
import SignInOrSignUp from "./signIn/page";

export default function Home() {
  return (
    <main className="flex   min-h-screen justify-center items-center relative  p-24">
      <SignInOrSignUp/>
    </main>
  );
}
