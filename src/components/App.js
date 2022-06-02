import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "../lib/commerce";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await commerce.products.list();
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Router>
        <div className='app'>
          <div className='container'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/collections' element={<Products products={products} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
