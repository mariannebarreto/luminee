/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { MdDelete, MdEditNote } from 'react-icons/md';
/* import Swal from 'sweetalert2'; */
/* import withReactContent from 'sweetalert2-react-content'; */
import {
  collection, query, onSnapshot, orderBy, doc, deleteDoc,
} from 'firebase/firestore';
import { db, auth } from '../../lib/firebase-config';
import './NotesContainer.css';

function ShowNotes() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const userID = auth.currentUser;
    const { uid } = userID;
    const arrayNotes = [];
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'));
    onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((docs) => {
        if (docs.data().userID === uid) {
          arrayNotes.push({ ...docs.data(), id: docs.id });
        }
      });
      setNotes(arrayNotes);
    });
  };

  const HandleDeleteNotes = async (id) => {
    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <section className="allNotes">
      { notes.map((note) => (
        <div className="littleNote">
          <div key={note.id} className="littleNoteData">
            <p className="noteTitle">{note.title}</p>
            <p className="noteText">{note.note}</p>
          </div>
          <footer className="iconContainer">
            <MdEditNote className="editIcon" size="1.8em" type="submit" />
            <MdDelete className="deleteIcon" size="1.8em" type="submit" onClick={() => { HandleDeleteNotes(note.id); }} />
          </footer>
        </div>

      ))}
    </section>
  );
}

export default ShowNotes;
