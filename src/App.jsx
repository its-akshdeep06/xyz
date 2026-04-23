import Landing from './Landing';
import Auth from './Auth';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;