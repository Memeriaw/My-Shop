import React from "react";

function ProductCard({ name, price, inStock, discount }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? "In stock" : "Sold out"}</p>
      {discount && <p>10% off</p>}
    </div>
  );
}

export default ProductCard;
