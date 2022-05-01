import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import ProtectedRoute from './components/ProtectedRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <Container style={{ width: '400px' }}>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}

export default App;
