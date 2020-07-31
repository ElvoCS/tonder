import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "mia",
      url:
        "https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/07/Screen-Shot-2020-07-02-at-11.37.51-am-5a6f.png?quality=90&strip=all&zoom=1&resize=644%2C456&ssl=1",
    },
    {
      name: "jessica",

      url:
        "https://vignette.wikia.nocookie.net/disney/images/1/1c/Jessica_Chastain.jpg/revision/latest?cb=20190827205115",
    },
  ]);
  //const people = [];

  return (
    <div>
      <h1>TidnerCards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
