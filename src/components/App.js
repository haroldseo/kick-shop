import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
