import React from "react";
import { products } from "../data/products.js";
import ProductCard from "../ProductCard.jsx";

function Products() {
  return (
    <section>
      <h1>Products</h1>
      <div className="grid product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
