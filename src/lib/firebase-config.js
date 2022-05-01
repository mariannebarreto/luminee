import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyArQOJp9K4omHjX4-pqzGI_UPxB6ffc7jc',
  authDomain: 'luminee-cddcf.firebaseapp.com',
  projectId: 'luminee-cddcf',
  storageBucket: 'luminee-cddcf.appspot.com',
  messagingSenderId: '265273625224',
  appId: '1:265273625224:web:e34ae0f3fb24558a37ed3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
