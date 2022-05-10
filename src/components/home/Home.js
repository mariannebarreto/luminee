/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdPostAdd } from 'react-icons/md';
import { signOut, getAuth } from 'firebase/auth';
import Note from '../notes/Note';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogOut = () => {
    signOut(auth).then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  const handleAddNote = () => {
    navigate('/newnote');
  };

  return (
    <section className="notesView">
      <div className="nameContainer">
        <div className="btnContainer">
          <MdLogout type="submit" className="logOut" onClick={handleLogOut} size="1.3em" />
        </div>
      </div>
      <div className="notesContainer">
        <Note />
      </div>
      <footer className="menuContainer">
        <MdPostAdd type="submit" className="addNote" size="3.5em" onClick={handleAddNote} />
      </footer>
    </section>
  );
}

export default Home;
