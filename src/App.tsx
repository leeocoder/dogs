import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { UserStorage } from './contexts/UserContext';
import User from './Components/User';
import ProtectedRouter from './Helpers/ProtectedRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='conta/*'
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route
              path='login/*'
              element={<Login />}
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
