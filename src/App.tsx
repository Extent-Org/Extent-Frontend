import React, { useEffect } from 'react';
import './App.scss';
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import PageLayout from './components/PageLayout/PageLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
