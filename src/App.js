import { Routes, Route } from 'react-router-dom';
import { React } from 'react';
import './style.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import ProtectedRoute from './components/ProtectedRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (

    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
                )}
        />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
