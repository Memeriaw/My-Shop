import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import ProductCard from "./ProductCard.jsx";

const products = [
  { id: 1, name: "Shirt", price: 20, inStock: true, discount: true },
  { id: 2, name: "Jeans", price: 45, inStock: false },
  { id: 3, name: "Sneakers", price: 60, inStock: true, discount: true },
  { id: 4, name: "Hat", price: 15, inStock: true },
];

function App() {
  return (
    <main className="shop">
      <Header title="My Shop" />
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            discount={product.discount}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
