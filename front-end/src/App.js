import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import [PAGE NAME] from './/pages/[PAGE NAME]';

function App() {
  return (
    <div className="App">
      <p>hi bianca :3c</p>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/[PATH NAME]" element={<[PAGE NAME] />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
