import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { products } from "../data/products.js";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section>
        <p>Product not found.</p>
        <Link to="/products">Back to products</Link>
      </section>
    );
  }

  return (
    <section className="card product-detail">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.inStock ? "In stock" : "Sold out"}</p>
      <div className="button-row">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
