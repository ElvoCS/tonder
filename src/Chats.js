import React from "react";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="jennifer"
        message="Wag1"
        timestamp="40 seconds ago"
        profilePic="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/08/931/524/jennifer-lopez-hustlers-frown.jpg?ve=1&tl=1"
      />

      <Chat
        name="jessica"
        message="howdy"
        timestamp="2 minutes ago"
        profilePic="https://www.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/2020072894343/katy-perry-reveals-baby-daughter-due-date-and-transforms-look/0-452-299/katy-perry-baby-daughter-due-date-t.jpg"
      />
      <Chat
        name="bey"
        message="howdy"
        timestamp="1 day ago"
        profilePic="https://www.etonline.com/sites/default/files/styles/video_1920x1080/public/images/2020-06/eto_trending_bet_awards_beyonce_062820_vidpic.jpg?h=d1cb525d&itok=GIBn7K5j"
      />
      <Chat
        name="kee"
        message="howdy"
        timestamp="20 minutes ago"
        profilePic="https://www.cheatsheet.com/wp-content/uploads/2020/06/JenifferTarazona.png"
      />
    </div>
  );
}

export default Chats;
