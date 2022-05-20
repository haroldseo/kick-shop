import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <div className='container'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
