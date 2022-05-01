import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';

export default function LoginScreen() {
  const googleLogin = useUserAuth();
  const navigate = useNavigate();

  const googleHandler = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      navigate('/Home');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1> Hola mundo</h1>
      <button type="submit" onClick={googleHandler}>Google</button>
    </div>
  );
}
