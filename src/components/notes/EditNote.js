/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import './EditNote.css';
import {
  setDoc, collection, getDoc, doc, serverTimestamp,
} from 'firebase/firestore';
import { db, auth } from '../../lib/firebase-config';

function EditNote() {
  // NAVEGA
  const navigate = useNavigate();
  const { id } = useParams();

  const noteToEdit = {
    title: '',
    note: '',
    userID: auth.currentUser,
    date: serverTimestamp(),
  };

  const [updateNote, setupdateNote] = useState(noteToEdit);

  const getNotesId = async () => {
    try {
      const collectionRef = collection(db, 'notes');
      const docSnap = await getDoc(collectionRef, id);
      setupdateNote(docSnap.data());
    } catch (e) {
      console.error(e);
    }
  };
  // -------HANDLERS

  const handleNavHome = () => {
    navigate('/Home');
  };

  const handleEditNote = async (e) => {
    e.preventDefault();
    getNotesId();
    const docRef = doc(db, 'notes', id);
    await setDoc(docRef, updateNote, {
      email: auth.currentUser.email,
      date: serverTimestamp(),
    }, { merge: true }).then(navigate('/Home'));
  };

  useEffect(() => {
    getNotesId();
  }, []);

  return (
  /* <div>
      AQUI ES LA VIEW DE EDICION DE NOTAS
      <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
    </div> */
    <section className="editView">
      <div className="topContainer">
        <header className="headerContainer">
          {' '}
          Edit your note
          {' '}
        </header>
      </div>
      <form className="writeAreaContainer" onSubmit={(e) => { handleEditNote(e); }}>
        <input
          type="text"
          id="titleNote"
          placeholder="Title"
          value={updateNote.title}
          onChange={(e) => { setupdateNote({ ...updateNote, title: e.target.value }); }}
        />
        <textarea
          id="bodyNote"
          placeholder="Write your note here"
          rows="40"
          cols="40"
          value={updateNote.note}
          onChange={(e) => { setupdateNote({ ...updateNote, note: e.target.value }); }}
        />

        <footer className="footerMenu">
          <BsFileEarmarkCheckFill
            type="submit"
            className="iconNote"
            size="2.5em"
            onSubmit={(e) => { handleEditNote(e); }}
          />
          <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
          <IoIosCloseCircle
            type="submit"
            className="iconClose"
            size="3em"
            onClick={handleNavHome}
          />
        </footer>
      </form>

    </section>
  );
}

export default EditNote;
