import React from 'react';

import Header from '../../components/header/header';
import Spread from '../../components/spread/spread';
import SelectPay from '../../components/select-pay/select-pay';
import FormPay from '../../components/form-pay/form-pay';
import Button from '../../components/button/button';
import './payment.styles.scss';

const Payment = () => (
  <div>
    <Header title='Payment' />
    <Spread selected='2' />
    <SelectPay />
    <FormPay />
    <div className='total'>
      <p className='total__name'>Total amount</p>
      <p className='total__value'>$27.50</p>
    </div>
    <Button text='Complete Payment' route='/pay' />
  </div>
);

export default Payment;
