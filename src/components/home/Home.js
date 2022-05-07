import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdPostAdd } from 'react-icons/md';
import { useUserAuth } from '../../context/UserAuthContext';
import Note from '../notes/Note';
import './Home.css';

function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddNote = () => {
    navigate('/newnote');
  };
  return (
    <section className="notesView">
      <div className="nameContainer">
        {user.email}
        <div className="btnContainer">
          <MdLogout type="submit" className="logOut" onClick={handleLogout} size="1.3em" />
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
