import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (<header className="App-header">
    <h1>ReSTy</h1>
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/help">Help</NavLink>
      </li>
    </nav>
  </header>);
}

export default Header;