import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* <Route
        path="/product/:id"
        element= {<ProductP} */}

      </Routes>
    </Router>
  );
}

export default App;