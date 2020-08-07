import React from 'react';
import { Link } from "react-router-dom";
import './styles/nav.css'

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <p>Donutty!</p>
      </div>

      <div className="nav-bar-links">
        <Link exact to="/">Menu</Link>
        <Link exact to="/">About</Link>
        <Link exact to="/">Contact</Link>
        <Link exact to="/admin">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navigation;