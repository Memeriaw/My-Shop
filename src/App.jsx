import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import ProductCard from "./ProductCard.jsx";
import Counter from "./Counter.jsx";
import NameInput from "./NameInput.jsx";
import SearchForm from "./SearchForm.jsx";
import TodoList from "./TodoList.jsx";
import VisibilityToggle from "./VisibilityToggle.jsx";
import CharacterCounter from "./CharacterCounter.jsx";

const products = [
  { id: 1, name: "Shirt", price: 20, inStock: true, discount: true },
  { id: 2, name: "Jeans", price: 45, inStock: false },
  { id: 3, name: "Sneakers", price: 60, inStock: true, discount: true },
  { id: 4, name: "Hat", price: 15, inStock: true },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="shop">
      <Header title="My Shop" />
      <p className="cart-count" aria-live="polite">Cart: {cartCount} items</p>
      <div className="grid product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            discount={product.discount}
            onAddToCart={() => setCartCount((count) => count + 1)}
          />
        ))}
      </div>
      <section className="demos" aria-label="React state practice">
        <Counter />
        <VisibilityToggle />
        <CharacterCounter />
        <NameInput />
        <SearchForm />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
