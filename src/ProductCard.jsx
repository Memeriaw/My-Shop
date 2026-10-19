import React from "react";

function ProductCard({ name, price, inStock, discount, onAddToCart }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? "In stock" : "Sold out"}</p>
      {discount && <p>10% off</p>}
      <button type="button" onClick={onAddToCart} disabled={!inStock}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
