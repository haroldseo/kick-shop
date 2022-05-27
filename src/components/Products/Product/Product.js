import React from "react";

function Product({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
}

export default Product;
