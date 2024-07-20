import React from 'react';
import './main.scss';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Homepage />} />
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;
