import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GraphContainer from './Containers/GraphContainer';
import ResCalcContainer from './Containers/ResCalcContainer';
import NavBar from './Containers/NavBar';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/data-plotting" element={< GraphContainer />} />
        <Route path="/resource-calculator" element={< ResCalcContainer />} />
      </Routes>
    </Router>

  );
}

export default App;