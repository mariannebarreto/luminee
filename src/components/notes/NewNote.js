import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHome, MdDelete, MdBorderColor } from 'react-icons/md';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
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
          <MdDelete type="submit" className="iconNoteDelete" size="1.3em" />
        </div>
      </div>
      <footer className="menuContainerNotes">
        <BsFileEarmarkCheckFill type="submit" className="iconNote" size="2.5em" />
        <MdBorderColor type="submit" className="iconNote" size="3em" />
        <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
      </footer>
    </section>
  );
}

export default NewNote;
