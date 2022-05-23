/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, serverTimestamp, doc, deleteDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyBz3R7HKfTg_TutkkRpNJ08k7zr-CKL9qA',
  authDomain: 'lumine-a3594.firebaseapp.com',
  projectId: 'lumine-a3594',
  storageBucket: 'lumine-a3594.appspot.com',
  messagingSenderId: '394044920083',
  appId: '1:394044920083:web:7334a177b8b9f8455b4ae6',
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

// ----- DELETE NOTE
export const deleteNote = async (id) => {
  const noteDoc = doc(db, 'notes', id);
  await deleteDoc(noteDoc);
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
