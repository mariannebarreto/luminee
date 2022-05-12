/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHome, MdDelete, MdBorderColor } from 'react-icons/md';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { auth, notes } from '../../lib/firebase-config';
import './NewNote.css';

function NewNote() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const name = user?.displayName;
  const userPhoto = user?.photoURL;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    console.log(noteTitle);
    console.log(noteText);

    notes(noteTitle, noteText);
    navigate('/home');
  };

  const Title = (event) => {
    setNoteTitle(event.target.value);
  };
  const Text = (event) => {
    setNoteText(event.target.value);
  };

  const handleNavHome = () => {
    navigate('/home');
  };

  return (
    <section className="newNoteView">
      <div className="nameContainerNotes">
        <div className="userContainer">
          <img src={userPhoto} alt="userPic" className="userPhoto" />
          <div className="displayName">
            {' '}
            ¡Welcome
            {' '}
            {name}
            !
            {' '}
          </div>
        </div>
        <div className="btnContainer">
          <MdDelete type="submit" className="iconNoteDelete" size="1.3em" />
        </div>
      </div>
      <form className="writeAreaContainer">
        <input type="text" id="titleNote" placeholder="Title" onChange={Title} />
        <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" onChange={Text} />
      </form>
      <footer className="menuContainerNotes">
        <BsFileEarmarkCheckFill
          type="submit"
          className="iconNote"
          size="2.5em"
          onClick={handleAddNote}
        />
        <MdBorderColor type="submit" className="iconNote" size="3em" />
        <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
      </footer>
    </section>
  );
}

export default NewNote;
