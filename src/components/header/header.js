import React from 'react';

import './header.styles.scss'

const Header = ({ title }) => (
  <div className='header'>
    <span className="material-icons">keyboard_arrow_left</span>
    <h2>{title}</h2>
  </div>
);

export default Header;
