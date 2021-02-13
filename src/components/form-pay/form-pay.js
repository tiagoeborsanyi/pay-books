import React from 'react';

import card from '../../assets/master.png';
import invisible from '../../assets/invisible-symbol.png';
import './form-pay.styles.scss';

const FormPay = () => (
  <div className='formpay'>
    <img src={card} alt='card' className='formpay__image' />
    <form>
      <div className='formpay__item'>
        <label>Credit Card Number</label>
        <span>(XXXX XXXX XXXX XXXX)</span>
        <img src={invisible} alt='invisible' />
        <input type='text' />
      </div>
      <div className='formpay__container-line'>
        <div className='formpay__item menor'>
          <label>Expiry Date</label>
          <span>(mm/yy)</span>
          <input type='text' />
        </div>
        <div className='formpay__item menor'>
          <label>CVV</label>
          <span>(XXX)</span>
          <input type='text' />
        </div>
      </div>
    </form>
  </div>
);

export default FormPay;
