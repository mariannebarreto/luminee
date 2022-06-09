/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdPostAdd } from 'react-icons/md';
import { signOut, getAuth } from 'firebase/auth';
import ShowNotes from '../notes/NotesContainer';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const auth = getAuth();

  const user = auth.currentUser;
  const name = user?.displayName;
  const userPhoto = user?.photoURL;

  const handleLogOut = () => {
    signOut(auth).then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  const handleAddNote = () => {
    navigate('/Newnote');
  };

  return (
    <section className="notesView">
      <div className="nameContainer">
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
          <MdLogout type="submit" className="logOut" onClick={handleLogOut} size="1.3em" />
        </div>
      </div>
      <section className="notesHome">
        <ShowNotes />
      </section>
      <footer className="menuContainer">
        <MdPostAdd type="submit" className="addNote" size="3.5em" onClick={handleAddNote} />
      </footer>
    </section>
  );
}

export default Home;
