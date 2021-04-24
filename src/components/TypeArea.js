import React, { useState } from "react";

export default function TypeArea({ addNewMessage }) {
  const [text, setText] = useState("");

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      addNewMessage(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleAddMessage} className="type-area">
      <input
        onChange={(e) => setText(e.target.value)}
        required
        type="text"
        value={text}
        placeholder="Start typing here ..."
      />
      <button
        style={
          text.trim().length < 1
            ? { opacity: 0.4, pointerEvents: "none" }
            : null
        }
      >
        <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
          <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z" />
          <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z" />
        </svg>
      </button>
    </form>
  );
}
