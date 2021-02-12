import React from 'react';
import { Link } from 'react-router-dom';

import './spread.styles.scss';

const Spread = ({ selected }) => (
  <div className='spread'>
    <Link to='/'>
      <div className={(selected === '1') ? 'selected' : ''}></div>
    </Link>
    <Link to='/pay'>
      <div className={(selected === '2') ? 'selected' : ''}></div>
    </Link>
  </div>
);

export default Spread;
