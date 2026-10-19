import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="demo">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className="button-row">
        <button type="button" onClick={() => setCount((current) => current + 1)}>
          Add
        </button>
        <button
          type="button"
          onClick={() => setCount((current) => Math.max(0, current - 1))}
        >
          Subtract
        </button>
        <button type="button" onClick={() => setCount((current) => current + 5)}>
          +5
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
