import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHome, MdDelete } from 'react-icons/md';
import { BsSave2, BsPen } from 'react-icons/bs';
import { useUserAuth } from '../../context/UserAuthContext';
import './NewNote.css';

function NewNote() {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate('/home');
  };

  return (
    <section className="newNoteView">
      <div className="nameContainerNotes">
        {user.email}
        <div className="btnContainer">
          <MdHome type="submit" className="btnHome" size="1.3em" onClick={handleNavHome} />
        </div>
      </div>
      <footer className="menuContainerNotes">
        <BsPen type="submit" className="iconNote" size="2.5em" />
        <BsSave2 type="submit" className="iconNote" size="2.5em" />
        <MdDelete type="submit" className="iconNote" size="2.5em" />
      </footer>
    </section>
  );
}

export default NewNote;
