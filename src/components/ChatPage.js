import React from "react";
import Message from "./Message";
import ScrollToView from "./ScrollToView";

export default function ChatPage({ allMessages }) {
  const renderMessages = allMessages.map((message) => (
    <Message key={message.id} message={message} />
  ));

  return (
    <div className="page">
      <div className="chat-section">
        {renderMessages}
        <ScrollToView messages={allMessages} />
      </div>
    </div>
  );
}
