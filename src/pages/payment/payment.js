import React from 'react';

import Header from '../../components/header/header';
import Spread from '../../components/spread/spread';
import Button from '../../components/button/button';
import './payment.styles.scss';

const Payment = () => (
  <div>
    <Header title='Payment' />
    <Spread selected='2' />
    <Button text='Complete Payment' route='/pay' />
  </div>
);

export default Payment;
