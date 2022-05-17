/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, serverTimestamp, doc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyArQOJp9K4omHjX4-pqzGI_UPxB6ffc7jc',
  authDomain: 'luminee-cddcf.firebaseapp.com',
  projectId: 'luminee-cddcf',
  storageBucket: 'luminee-cddcf.appspot.com',
  messagingSenderId: '265273625224',
  appId: '1:265273625224:web:e34ae0f3fb24558a37ed3d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const googlePop = signInWithPopup;
export const db = getFirestore();
export const storage = getStorage(app);
export const notesRef = doc(collection(db, 'notes'));

// -----SAVE NOTES ON FIREBASE

export const notes = (title, note) => {
  const user = auth.currentUser;
  const { uid } = user;
  addDoc(collection(db, 'notes'), {
    title,
    note,
    userID: uid,
    date: serverTimestamp(),
  });
};

// --------- GET NOTES TO RENDER

/* export const qry = () => {
  const user = auth.currentUser;
  const { uid } = user;
  const q = (query(notesRef, ('uid', '==', uid), orderBy('timestamp', 'desc')));
  return q;
};

export const getNotesCol = async () => {
  const user = auth.currentUser;
  const { uid } = user;
  const orderRef = await getDocs(query(notesRef, ('uid', '==', uid), orderBy('timestamp', 'desc')));
  return orderRef;
}; */

// ----- HOOK USEAUTH

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    if (!unsub) {
      navigate('/login');
    }
    return unsub;
  });
  return currentUser;
}
