/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import './EditNote.css';
import { updateDoc, getDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase-config';

function EditNote() {
// HOOKS
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  // handler
  const handleNavHome = () => {
    navigate('/Home');
  };

  // funcion que la actualiza
  const update = async (e) => {
    e.preventDefault();
    const noteRef = doc(db, 'notes', id);
    const data = { title: noteTitle, note: noteText };
    await updateDoc(noteRef, data);
    navigate('/Home');
  };
  // funcion para obtener la nota

  const getNoteById = async () => {
    console.log(id);
    const noteDoc = await getDoc(doc(db, 'notes', id));
    if (noteDoc.exists()) {
      console.log(noteDoc.data());
      setNoteTitle(noteDoc.data().title);
      setNoteText(noteDoc.data().note);
    } else {
      console.log('note not found');
    }
  };

  // otra funcion para editar

  useEffect(() => {
    getNoteById();
  }, []);

  return (
    <section className="editView">
      <div className="topContainer">
        <header className="headerContainer">
          {' '}
          Edit your note
          {' '}
        </header>
      </div>
      <form className="writeAreaContainer" onSubmit={update}>
        <input
          type="text"
          id="titleNote"
          placeholder="Title"
          value={noteTitle}
          onChange={(e) => { setNoteTitle(e.target.value); }}
        />
        <textarea
          id="bodyNote"
          placeholder="Write your note here"
          rows="40"
          cols="40"
          value={noteText}
          onChange={(e) => { setNoteText(e.target.value); }}
        />

        <footer className="footerMenu">
          <BsFileEarmarkCheckFill
            type="submit"
            className="iconNote"
            size="2.5em"
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
