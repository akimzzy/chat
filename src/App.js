import { useState } from "react";
import "./App.css";
import ChatPage from "./components/ChatPage";
import TypeArea from "./components/TypeArea";

function App() {
  const defaultMessages = [
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text",
      type: "bot",
      id: 1,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 2,
    },
    {
      text:
        "Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 3,
    },
    {
      text: "Okay.",
      type: "bot",
      id: 4,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text",
      type: "bot",
      id: 5,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 6,
    },
    {
      text:
        "Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 7,
    },
    {
      text: "Okay.",
      type: "bot",
      id: 8,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 9,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 10,
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      type: "user",
      id: 11,
    },
  ];
  const [allMessages, setAllMessages] = useState(defaultMessages);

  const addNewMessage = (text) => {
    const newMessage = { text, type: "user", id: allMessages.length + 1 };
    setAllMessages([...allMessages, newMessage]);
  };

  return (
    <div className="App">
      <ChatPage allMessages={allMessages} />
      <TypeArea addNewMessage={addNewMessage} />
    </div>
  );
}

export default App;
