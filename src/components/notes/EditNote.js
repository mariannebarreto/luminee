import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import './EditNote.css';

function EditNote() {
  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate('/Home');
  };

  return (
    <div>
      AQUI ES LA VIEW DE NOTAS
      <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
    </div>
  );
}

export default EditNote;
