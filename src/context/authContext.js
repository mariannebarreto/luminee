/* eslint-disable no-undef */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { auth } from '../lib/firebase-config';

const userAuthContext = createContext();

function userAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function googleLogin() {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth', currentUser);
      setUser(currentUser);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userAuthContext.Provider value={{ user, googleLogin, logOut }}>
      { children }
    </userAuthContext.Provider>
  );
}

export default userAuthContextProvider;

export function useUserAuth() {
  return useContext(userAuthContextProvider);
}
