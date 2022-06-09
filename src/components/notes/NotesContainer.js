/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete, MdEditNote } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  collection, query, orderBy, getDocs, deleteDoc, doc,
} from 'firebase/firestore';
import { db, auth } from '../../lib/firebase-config';
import './EditNote';
import './NotesContainer.css';

const MySwal = withReactContent(Swal);

function ShowNotes() {
  // NAVEGA
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`${'/EditNote/'}${id}`);
  };

  const [notes, setNotes] = useState([]);

  // RENDERIZA NOTAS

  const getNotes = async () => {
    const userID = auth.currentUser;
    const { uid } = userID;
    const arrayNotes = [];
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'));

    const post = await getDocs(q);
    console.log(post);

    // eslint-disable-next-line no-shadow
    post.forEach((doc) => {
      if (doc.data().userID === uid) {
        arrayNotes.push({ ...doc.data(), id: doc.id });
      }
    });
    setNotes(arrayNotes);
  };

  // BORRA
  const deleteNote = async (id) => {
    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
    getNotes();
  };

  // SWEET ALERT

  const handleDeleteNotes = (id) => {
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
        <div className="littleNote" key={note.id}>
          <div className="littleNoteData">
            <p className="noteTitle">{note.title}</p>
            <p className="noteText">{note.note}</p>
          </div>
          <footer className="iconContainer">
            <MdEditNote className="editIcon" size="1.8em" type="button" onClick={() => { handleEdit(note.id); }} />
            <MdDelete className="deleteIcon" size="1.8em" type="" onClick={() => { handleDeleteNotes(note.id); }} />
          </footer>
        </div>

      ))}
    </section>
  );
}

export default ShowNotes;
