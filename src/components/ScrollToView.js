import React, { useEffect, useRef } from "react";

export default function ScrollToView({ messages }) {
  const bottom = useRef(null);

  const scrollToBottom = () => {
    document.querySelector(".type-area").querySelector('input').focus();
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);
  return <div ref={bottom} style={{ padding: ".5rem" }}></div>;
}
