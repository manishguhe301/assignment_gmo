import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login'
import TableComponent from './components/TableComponent'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    if (name && email && phone) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleRouteChange = (route) => {
    if (route === '/main' && !isAuthenticated) {
      alert('For accessing the main page, you have to log in.');
      return <Navigate to='/' />;
    }
    return isAuthenticated ? <TableComponent /> : <LoginPage />;
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<LoginPage />} />
        <Route path='/main' element={handleRouteChange('/main')} />
      </Routes>
    </div>
  );
}

export default App;
