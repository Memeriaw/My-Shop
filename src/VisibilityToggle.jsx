import React, { useState } from "react";

function VisibilityToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="demo">
      <h2>Toggle</h2>
      <button
        type="button"
        onClick={() => setIsVisible((visible) => !visible)}
        aria-expanded={isVisible}
      >
        {isVisible ? "Hide message" : "Show message"}
      </button>
      {isVisible && <p>This paragraph is controlled by state.</p>}
    </section>
  );
}

export default VisibilityToggle;
