import React from "react";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Nike Air Max 1 Kasina",
    price: "$160",
    image: "https://houseofheat.co/app/uploads/2022/05/Kasina-x-Nike-Air-Max-1-Won-Ang-DQ8475-001-1.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max 1 Patta",
    price: "$160",
    image: "https://houseofheat.co/app/uploads/2021/10/patta-nike-air-max-1-DH1348-001-release-date-2.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max 1/97 Sean Wotherspoon",
    price: "$160",
    image:
      "https://houseofheat.co/app/uploads/2018/01/Nike-Air-Max-197-Sean-Wotherspoon-AJ4219-400-Release-Date-Price.jpg",
  },
];

function Products() {
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
