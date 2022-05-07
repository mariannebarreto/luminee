import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import GoogleButton from 'react-google-button';
import './Login.css';
import { useUserAuth } from '../../context/UserAuthContext';

function Login() {
  const [error] = useState('');
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch (err) {
      console.log(error.message);
    }
  };

  return (

    <section className="auth-container">
      <header className="lumineTitle">Lumine</header>
      <div className="sloganContainer"><p className="slogan">Enlight your ideas</p></div>
      <form className="loginContainer">
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <GoogleButton
            type="light"
            onClick={handleGoogleSignIn}
          />
        </Grid>

      </form>
      <footer className="footerLogin" />

    </section>
  );
}
export default Login;
