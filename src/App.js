import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Lore from './pages/Lore'; // 1. Import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/lore" element={<Lore />} /> {/* 2. Add the route */}
      </Routes>
    </Router>
  );
}

export default App;