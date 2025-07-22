import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComponentDemo from './pages/ComponentDemo';

function App() {
  return (
    <Router>
      <Link to="/demo">View Components Demo</Link>
      <Routes>
        <Route path="/demo" element={<ComponentDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
