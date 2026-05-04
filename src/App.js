import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Lore from './pages/Lore';
import Harrow from './pages/Harrow'; 
import Dockside from './pages/Dockside';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/lore" element={<Lore />} />

        {/* Individual Faction Dossiers */}
        <Route path="/factions/harrow" element={<Harrow />} />
        <Route path="/factions/dockside" element={<Dockside />} />
        
        {/* 
          As you create Dockside.jsx and CircuitRunners.jsx, 
          add their routes here similarly:
          <Route path="/factions/dockside" element={<Dockside />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;