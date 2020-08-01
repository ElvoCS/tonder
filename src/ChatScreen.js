import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Jessica",
      image:
        "https://www.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/2020072894343/katy-perry-reveals-baby-daughter-due-date-and-transforms-look/0-452-299/katy-perry-baby-daughter-due-date-t.jpg",
      message: "Hey you",
    },
    {
      name: "Jessica",
      image:
        "https://www.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/2020072894343/katy-perry-reveals-baby-daughter-due-date-and-transforms-look/0-452-299/katy-perry-baby-daughter-due-date-t.jpg",
      message: "Heyooo",
    },
    {
      message: "Wag1",
    },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH JESSICA ON 01/08/2020
      </p>
      {}
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
