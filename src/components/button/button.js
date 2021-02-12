import React from 'react';
import { withRouter } from 'react-router-dom';

import './button.styles.scss';

const Button = ({ text, route, history }) => (
  <button className='button' onClick={() => history.push(`${route}`)}>
    <span>{text}</span>
  </button>
);

export default withRouter(Button);
