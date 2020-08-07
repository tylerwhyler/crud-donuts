import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./home"
import Navigation from "./navigation"
import Admin from './admin'

import "./styles/nav.css"


function App() {
  return (
    <div className="App">

      <Navigation />

        <Switch>
            <Route
                exact path="/"
                component={Home}
            />
            <Route
                exact path = "/admin"
                component={Admin}
            />
        </Switch>
    </div>
  );
}

export default App;