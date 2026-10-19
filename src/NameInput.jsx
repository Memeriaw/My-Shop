import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <section className="demo">
      <h2>Controlled input</h2>
      <label>
        Your name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />
      </label>
      <p>Hello, {name || "stranger"}!</p>
    </section>
  );
}

export default NameInput;
