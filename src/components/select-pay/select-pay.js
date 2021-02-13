import React from 'react';

import './select-pay.styles.scss';
import master from '../../assets/master.png';
import visa from '../../assets/visa.jpg';
import paypal from '../../assets/paypal.png';

const SelectPay = () => (
  <div className='selectpay'>
    <h3 className='selectpay__title'>Select Payment Method</h3>
    <ul className='selectpay__items'>
      <li className='selectpay__item'>
        <img src={master} alt='master' />
        <span>Credit Card</span>
      </li>
      <li className='selectpay__item'>
        <img src={visa} alt='visa' />
        <span>Visa</span>
      </li>
      <li className='selectpay__item'>
        <img src={paypal} alt='paypal' />
        <span>PayPal</span>
      </li>
    </ul>
  </div>
);

export default SelectPay;
