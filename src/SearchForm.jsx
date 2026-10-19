import React, { useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(query.trim());
    setQuery("");
  };

  return (
    <section className="demo">
      <h2>Search form</h2>
      <form className="form-row" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="search-query">
          Search
        </label>
        <input
          id="search-query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {submitted && <p>You searched for: {submitted}</p>}
    </section>
  );
}

export default SearchForm;
