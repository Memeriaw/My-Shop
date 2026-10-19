import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "./CartContext.jsx";

function Layout() {
  const { totalItems } = useCart();

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
      </nav>
      <main className="shop">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
