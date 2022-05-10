import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './lib/firebase-config';
import Home from './components/home/Home';
import NewNote from './components/notes/NewNote';
import Login from './components/auth/Login';
import './App.css';

function App() {
  useAuth();

  return (

    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/NewNote" element={<NewNote />} />
    </Routes>

  );
}

export default App;
