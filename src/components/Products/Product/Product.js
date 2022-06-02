import React from "react";

import "./Product.css";

function Product({ product }) {
  return (
    <div className='product-card'>
      <img src={product.image.url} className='product-card__image' alt={product.name} />
      <div className='product-card__info'>
        <h1 className='product-card__name'>{product.name}</h1>
        <span className='product-card__price'>{product.price.formatted_with_symbol}</span>
      </div>
    </div>
  );
}

export default Product;
