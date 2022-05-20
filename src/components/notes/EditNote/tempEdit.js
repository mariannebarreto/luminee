/* eslint-disable no-console */
/* eslint-disable no-shadow */
/*import { useState, useEffect } from 'react';
import { MdHome } from 'react-icons/md';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase-config';
import './NewNote.css';

const navigate = useNavigate();

function EditNote() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleNavHome = () => {
    navigate('/Home');
  };

  /*  const Title = (event) => {
    setNoteTitle(event.target.value);
  };
  const Text = (event) => {
    setNoteText(event.target.value);
  }; */

 /* const { id } = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const note = doc(db, 'notes', id);
    const data = { title: noteTitle, note: noteText };
    await updateDoc(note, data);
    navigate('/Home');
  };

  const getNoteById = async (id) => {
    const note = await getDoc(doc(db, 'notes', id));
    if (note.exists()) {
      setNoteTitle(note.data().title);
      setNoteText(note.data().note);
      console.log(note.data());
    } else {
      console.log('Not found');
    }
  };

  useEffect(() => {
    getNoteById(id);
  }, []);

  return (
    <section className="newNoteView">
      <div className="nameContainerNotes">
        <div className="userContainer"> Edit your note </div>
      </div>
      <form className="writeAreaContainer">
        <input type="text" id="titleNote" placeholder="Title" onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle} />
        <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" onChange={(e) => setNoteText(e.target.value)} value={noteText} />
        <footer className="menuContainerNotes">
          <BsFileEarmarkCheckFill
            type="submit"
            className="iconNote"
            size="2.5em"
            onSubmit={handleUpdate}
          />
        </footer>
      </form>

      <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
    </section>

  );
}

export default EditNote;

<div className="closeContainer">
          <IoIosCloseCircle
            type="submit"
            className="iconClose"
            size="1.3em"
          />
        </div> */