import React, { useState } from "react";
import "./ChatScreen.css";
function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Jessica",
      image:
        "https://www.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/2020072894343/katy-perry-reveals-baby-daughter-due-date-and-transforms-look/0-452-299/katy-perry-baby-daughter-due-date-t.jpg",
      message: "Hey you",
    },
    {
      name: "Jennifer",
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/08/931/524/jennifer-lopez-hustlers-frown.jpg?ve=1&tl=1",
      message: "Heyooo",
    },
    {
      message: "Heyooo",
    },
  ]);
  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH JESSICA ON 01/08/2020</p>
      {messages.map((message) => (
        <div className="chatScreen__message">
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
