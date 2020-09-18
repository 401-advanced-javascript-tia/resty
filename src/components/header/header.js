import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (<header className="App-header">
    <h1>ReSTy</h1>
    <nav>
      <li>
        <NavLink data-testid="homelink" to="/">Home</NavLink>
        <NavLink data-testid="historylink" to="/history">History</NavLink>
        <NavLink data-testid="helplink" to="/help">Help</NavLink>
      </li>
    </nav>
  </header>);
}

export default Header;