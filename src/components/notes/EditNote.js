/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import {
  doc,
  query,
  limit,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';
import { notesRef } from '../../lib/firebase-config';
import './EditNote.css';

function EditNote({ id }) {
  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate('/Home');
  };

  // 1. hacer referencia al documento en la colección

  const docRef = doc(notesRef, 'notes', id);

  // 2. Obtener

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
      <form className="writeAreaContainer">
        <input type="text" id="titleNote" placeholder="Title" />
        <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" />
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
