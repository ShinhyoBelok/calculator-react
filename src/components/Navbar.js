import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            style={({ isActive }) => (isActive ? { color: 'orange' } : { color: 'white' })}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
