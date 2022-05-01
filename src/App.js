import { Routes, Route } from 'react-router-dom';
import { React } from 'react';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import ProtectedRoute from './components/ProtectedRoutes';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={<ProtectedRoute><Home /></ProtectedRoute>}
      />
    </Routes>

  );
}
