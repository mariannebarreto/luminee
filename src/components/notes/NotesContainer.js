/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { MdDelete, MdEditNote } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  collection, query, onSnapshot, orderBy, doc, deleteDoc,
} from 'firebase/firestore';
import { db, auth } from '../../lib/firebase-config';
import './NotesContainer.css';

const MySwal = withReactContent(Swal);

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
  // RENDERIZA
  const deleteNote = async (id) => {
    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
    getNotes();
  };

  // SWEET ALERT

  const HandleDeleteNotes = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      background: '#322D14',
      color: '#FEFBBF',
      showCancelButton: true,
      confirmButtonColor: '#53BAA7',
      cancelButtonColor: '#F3D91D',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }
    });
  };

  // RETORNA
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
