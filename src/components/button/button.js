import React from 'react';

import './button.styles.scss';

const Button = ({ text }) => (
  <button className='button'>
    <span>{text}</span>
  </button>
);

export default Button;
