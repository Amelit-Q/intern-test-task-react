import React from 'react';
import './../styles/navbar.scss';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">Home</li>
          <li className="navbar__list-item">about me</li>
          <li className="navbar__list-item">portfolio</li>
          <li className="navbar__list-item">contact</li>
        </ul>
        <div className="navbar__border-wrapper">
          <div className="navbar__border"></div>
        </div>
      </nav>
    </div>
  );
};
