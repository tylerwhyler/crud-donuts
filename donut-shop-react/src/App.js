import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./home"
import Navigation from "./navigation"

import "./styles/nav.css"


function App() {
  return (
    <div className="App">

      <Navigation />

      <Switch>
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;