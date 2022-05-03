import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <h2 className="loginWith"> LOGIN WITH:</h2>
        <div className="btnContainer">
          <button type="submit" id="signupGoogle" className="btnGoogle" onClick={handleGoogleSignIn}>Google</button>
        </div>
      </form>

    </section>

  /* <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Dont have an account?
        {' '}
        <Link to="/signup">Sign up</Link>
      </div>
    </> */
  );
}

export default Login;
