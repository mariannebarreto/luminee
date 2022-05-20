import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../lib/firebase-config';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  // eslint-disable-next-line no-console
  console.log('Check user in Private: ', user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
