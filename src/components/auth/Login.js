/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import GoogleButton from 'react-google-button';
import { BiCopyright } from 'react-icons/bi';
import './Login.css';
import { auth, provider, googlePop } from '../../lib/firebase-config';

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (app) => {
    console.log(app);
    await googlePop(auth, provider).then((isAuth) => {
      navigate('/Home');
      console.log(isAuth);
    });
  };

  return (

    <section className="auth-container">
      <header className="lumineTitle">Lumine</header>
      <div className="sloganContainer"><p className="slogan">Enlight your ideas</p></div>
      <form className="loginContainer">
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <GoogleButton
            className="btnGoogleContainer"
            type="light"
            onClick={handleGoogleSignIn}
          />
        </Grid>

      </form>
      <footer className="footerLogin">
        <BiCopyright className="copyRight" />
        <p claasName="credits">2022. Mariana Hernández Barreto.   </p>
      </footer>

    </section>
  );
}
export default Login;
