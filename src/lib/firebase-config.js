/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore, collection, doc, addDoc, deleteDoc, updateDoc,
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
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const googlePop = signInWithPopup;
export const db = getFirestore(app);
export const storage = getStorage(app);
export const colRef = collection(db, 'notes');

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

export const saveNote = async (newNotes) => {
  const user = auth.currentUser;
  // eslint-disable-next-line no-param-reassign
  newNotes.userId = user.email;

  await addDoc(colRef, newNotes);
  console.log('nueva nota creada');
};

export const editNote = async (note, Id) => {
  const noteToEdit = doc(db, 'notes', Id);

  await updateDoc(noteToEdit, {
    title: note.title,
    note: note.note,
    date: note.date,
    modif: note.modif,
    colection: note.collection,
  });
};

export const deletedNote = async (Id) => {
  await deleteDoc(doc(colRef, Id));
};
