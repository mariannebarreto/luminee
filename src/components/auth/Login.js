/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

        <div className="loginWithContainer">

          <p className="loginWithText">Login with: </p>

          <div className="inputsContainer">

            <input
              type="email"
              className="inputs"
              id="inputEmail"
              placeholder="Email:"
            />

            <input
              type="password"
              className="inputs"
              id="inputPassword"
              placeholder="Password:"
            />

          </div>
        </div>

        <p className="loginWithText">Or select: </p>

        <GoogleButton
          className="btnGoogleContainer"
          type="light"
          onClick={handleGoogleSignIn}
        />

      </form>
      <footer className="footerLogin">
        <BiCopyright className="copyRight" />
        <p claasName="credits">2022. Mariana Hernandez Barreto.   </p>
      </footer>

    </section>
  );
}
export default Login;
