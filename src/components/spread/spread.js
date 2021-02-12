import React from 'react';

import './spread.styles.scss';

const Spread = ({ selected }) => (
  <div className='spread'>
    <div className={(selected === '1') ? 'selected' : ''}></div>
    <div className={(selected === '2') ? 'selected' : ''}></div>
  </div>
);

export default Spread;
