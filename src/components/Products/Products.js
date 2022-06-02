import React from "react";

import "./Products.css";
import Product from "./Product/Product";

function Products({ products }) {
  return (
    <div className='products-list'>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
