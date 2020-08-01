import React from "react";
import "./App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons.js";
import Chats from "./Chats.js";
import ChatScreen from "./ChatScreen.js";

function App() {
  return (
    <div className="App">
      {/*cause this is outside the route it renders it regardless of route */}

      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          {/*default routes needs to be @ bottom otherwise it'll render / first */}
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
