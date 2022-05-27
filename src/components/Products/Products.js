import React from "react";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Nike Air Max 1 Kasina",
    price: 110,
    image: "https://houseofheat.co/app/uploads/2022/05/Kasina-x-Nike-Air-Max-1-Won-Ang-DQ8475-001-1.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max 1 Patta",
    price: 90,
    image:
      "https://cdn.sanity.io/images/c1chvb1i/production/d0268bccd7885d8660364f707a2e9f5d0dfde776-1100x735.jpg/nike-patta-air-max-1-metallic-silver-monarch-pure-platinum-2_1160x.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max 1/97 Sean Wotherspoon",
    price: 50,
    image:
      "https://sneakerbardetroit.com/wp-content/uploads/2018/05/Sean-Wotherspoon-Nike-Air-Max-197-Restock-Release-Date.jpg",
  },
];

function Products() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </>
  );
}

export default Products;
