import React, { useState } from "react";

const MAX_LENGTH = 200;

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <section className="demo">
      <h2>Character counter</h2>
      <label>
        Message
        <textarea
          value={text}
          maxLength={MAX_LENGTH}
          onChange={(event) => setText(event.target.value)}
          rows={4}
        />
      </label>
      <p>{text.length} / {MAX_LENGTH} characters</p>
    </section>
  );
}

export default CharacterCounter;
