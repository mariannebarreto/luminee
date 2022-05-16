/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
/* import Swal from 'sweetalert2'; */
/* import withReactContent from 'sweetalert2-react-content'; */
import {
  collection, query, onSnapshot, orderBy,
} from 'firebase/firestore';
import { db } from '../../lib/firebase-config';
import './NotesContainer.css';

function ShowNotes(props) {
  const { user } = props;
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    const arrayNotes = [];
    const q = query(collection(db, 'notes'), orderBy('dateSeconds', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((docs) => {
        if (docs.data().UserUID === user.uid) {
          arrayNotes.push({ ...docs.data(), id: docs.id });
        }
      });
      setNotes(arrayNotes);
    });
  };

  useEffect(() => {
    getNotes();
  }, []);
  console.log('si estoy pero no me veo');

  return (
    <section className="allNotes">
      { notes.map((note) => (
        <div key={note.id} className="littleNote">
          <getNotes />
          <p className="noteTitle">{note.title}</p>
          <p className="noteText">{note.text}</p>
          <MdDelete className="deleteIcon" size="1.3em" type="submit" />
        </div>

      ))}
    </section>
  );
}

export default ShowNotes;
