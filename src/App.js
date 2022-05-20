import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './lib/firebase-config';
import Home from './components/home/Home';
import EditNote from './components/notes/EditNote';
import NewNote from './components/notes/NewNote';
import Login from './components/auth/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  useAuth();

  return (

    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/Home"
        element={(
          <PrivateRoute>
            <Home />
          </PrivateRoute>
  )}
      />
      <Route
        exact
        path="/NewNote"
        element={(
          <PrivateRoute>
            <NewNote />
          </PrivateRoute>
)}
      />
      <Route
        exact
        path="/EditNote"
        element={(
          <PrivateRoute>
            <EditNote />
          </PrivateRoute>
)}
      />

    </Routes>

  );
}

export default App;
