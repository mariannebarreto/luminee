import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Note.css';

function Note() {
  return (
    <div className="note">
      <span>Esta es la primer nota, yay! </span>
      <div className="noteFooter">
        <small> Date: blablabla</small>
        <MdDelete className="deleteIcon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
