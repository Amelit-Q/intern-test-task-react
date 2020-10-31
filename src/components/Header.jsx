import React from 'react';
import './../styles/header.scss';
import arrowWhite from './../assets/pictures/down-arrow-white.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__hidden">∞ MENU</div>
      <div className="header__navbar">
        <div className="header__navbar-wrapper">
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">home</li>
              <li className="menu__list-item">about me</li>
              <li className="menu__list-item">portfolio</li>
              <li className="menu__list-item">contact</li>
            </ul>
          </nav>
          <div className="border-wrapper">
            <div className="menu__border"></div>
          </div>
        </div>
      </div>
      <div className="header__scroll-wrapper">
        <div className="header__scroll">
          <a href="#" className="header__scroll-link" alt="img">
            Scroll Down to see more
          </a>
          <img src={arrowWhite} alt="" className="scroll-arrow-white" />
        </div>
      </div>
    </div>
  );
};
