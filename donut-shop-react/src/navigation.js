import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-bar">
      <Link exact to="/">Menu</Link>
      <Link exact to="/">About</Link>
      <Link exact to="/">Contact</Link>
      <Link exact to="/">Admin Dashboard</Link>
    </div>
  );
}

export default Navigation; 