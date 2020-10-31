import React from 'react';
import './../styles/aboutme.scss';
import beard from './../assets/pictures/beard-guy.png';

export const AboutMe = () => {
  return (
    <div className="container">
      <div className="about-me">
        <div className="about-me__img">
          <img src={beard} alt="img" className="about-me__beard-guy" />
        </div>
        <div className="about-me__content">
          <h2 className="about-me__title">About me</h2>
          <p className="about-me__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <h3 className="about-me__author">Jason Wood</h3>
        </div>
      </div>
    </div>
  );
};
