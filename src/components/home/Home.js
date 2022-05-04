import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
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
  return (
    <section className="notesContainer">
      <div className="nameContainer">
        {user.email}
      </div>
      <div className="btnLogOutContainer">
        <button type="submit" className="logOUt" onClick={handleLogout}>logout</button>
        <footer className="menuContainer" />
      </div>
    </section>
  );
}

export default Home;
