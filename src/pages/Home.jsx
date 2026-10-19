import React from "react";
import { Link } from "react-router-dom";
import CharacterCounter from "../CharacterCounter.jsx";
import Counter from "../Counter.jsx";
import NameInput from "../NameInput.jsx";
import SearchForm from "../SearchForm.jsx";
import TodoList from "../TodoList.jsx";
import VisibilityToggle from "../VisibilityToggle.jsx";

function Home() {
  return (
    <>
      <section className="welcome">
        <h1>Welcome to My Shop</h1>
        <Link to="/products">Browse products</Link>
      </section>
      <section className="demos" aria-label="React state practice">
        <Counter />
        <VisibilityToggle />
        <CharacterCounter />
        <NameInput />
        <SearchForm />
        <TodoList />
      </section>
    </>
  );
}

export default Home;
