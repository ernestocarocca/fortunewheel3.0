import React, { useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import router, { Router } from 'next/router';

const YourRedirectPage = () => {

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        // Be användaren om deras e-postadress om den inte finns
      } else {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem('emailForSignIn');
            // Användaren är nu inloggad!
            // Du kan använda result.user för att få användarinformation
      
          router.push('/fortuneWheel')
          })
          .catch((error) => {
            console.error("Error signing in with email link", error);
          });
      }
    }
  }, []);

  return (
    <div>
      <p>Processing sign-in...</p>
      
    </div>
  );
};

export default YourRedirectPage;
