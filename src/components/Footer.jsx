import React from 'react';
import './../styles/footer.scss';
import arrowGray from './../assets/pictures/down-arrow-gray.png';

export const Footer = () => {
  return (
    <div class="footer__scroll-wrapper">
      <div class="footer__scroll">
        <a href="" class="header__scroll-link" alt="img">
          Scroll Down to see more
        </a>
        <img src={arrowGray} alt="arrow-bottom" class="scroll-arrow-white" />
      </div>
    </div>
  );
};
