import React from 'react';
import './main.scss';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  
  document.body.className = localStorage.getItem("page-theme") === "light-theme" ? "light-theme" : "dark-theme";
  const color = localStorage.getItem("primary-color") || "#ff4d00";
  document.documentElement.style.setProperty('--g-primary',color);
  document.documentElement.style.setProperty('--g-primary-op70',`${color}b3`);
  document.documentElement.style.setProperty('--g-primary-op50',`${color}80`);
  document.documentElement.style.setProperty('--g-primary-op30',`${color}4d`);
  
  return (
    <Routes>
      <Route path='*' element={<Homepage />} />
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;
