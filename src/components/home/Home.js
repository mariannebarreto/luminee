import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';

function Home() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div> Aquí van las notas: D </div>
      <div className="btnContainer">
        <button type="submit" onClick={handleLogOut}>
          Log out
        </button>
      </div>

    </>

  );
}

export default Home;
