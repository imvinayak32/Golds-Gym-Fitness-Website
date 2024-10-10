import React from 'react';
import { Route, Routers, Routes } from 'react-router-dom';
import { box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <box width="400px" sx={{ width: { xl : '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </box>
  )
}

export default App