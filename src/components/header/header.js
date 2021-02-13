import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './header.styles.scss'

const Header = ({ title, history }) => (
  <div className='header'>
    <span className="material-icons"><Link to='/'>keyboard_arrow_left</Link></span>
    <h2>{title}</h2>
  </div>
);

export default withRouter(Header);
