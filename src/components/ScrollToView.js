import React, { useEffect, useRef } from "react";

export default function ScrollToView({ messages }) {
  const bottom = useRef(null);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView();
    document.querySelector(".type-area").querySelector("input").focus();
  };

  useEffect(() => scrollToBottom(), [messages]);
  return <div ref={bottom} style={{ padding: ".5rem" }}></div>;
}
