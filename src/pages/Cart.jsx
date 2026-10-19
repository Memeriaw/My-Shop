import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";

function Cart() {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section>
        <h1>Your cart is empty</h1>
        <Link to="/products">Go shopping</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Cart</h1>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} x {item.qty} = ${item.price * item.qty}
            </span>
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
      <button type="button" onClick={clearCart}>
        Clear cart
      </button>
    </section>
  );
}

export default Cart;
