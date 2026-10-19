import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, name, price, inStock, discount }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? "In stock" : "Sold out"}</p>
      {discount && <p>10% off</p>}
      <Link to={`/products/${id}`}>View details</Link>
    </div>
  );
}

export default ProductCard;
