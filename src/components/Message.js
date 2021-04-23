import React from "react";

export default function Message({ message }) {
  return (
    <div>
      <div className={message.type === "bot" ? "bot-message" : "user-message"}>
        <div className="wrapper">{message.text}</div>
      </div>
    </div>
  );
}
