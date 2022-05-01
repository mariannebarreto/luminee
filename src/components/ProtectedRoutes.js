import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const { user } = useUserAuth();

  // eslint-disable-next-line no-console
  console.log('Check user in Private: ', user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
