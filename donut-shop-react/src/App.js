import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./home"
import Navigation from "./navigation"

import "./styles/main.css"

function App() {
  return (
    <div className="App">
        <p>
          Hi react
        </p>

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