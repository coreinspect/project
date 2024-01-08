import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import TermsOfService from './pages/tos/Terms';

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tos" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
