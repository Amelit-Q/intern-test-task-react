import React from 'react';
import './../styles/footer.scss';
import arrowGray from './../assets/pictures/down-arrow-gray.png';

export const Footer = () => {
  return (
    <div className="footer__scroll-wrapper">
      <div className="footer__scroll">
        <a href="" className="header__scroll-link" alt="img">
          Scroll Down to see more
        </a>
        <img src={arrowGray} alt="arrow-bottom" className="scroll-arrow-white" />
      </div>
    </div>
  );
};
