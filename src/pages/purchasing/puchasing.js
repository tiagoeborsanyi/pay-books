import React from 'react';

import Header from '../../components/header/header';
import Spread from '../../components/spread/spread';
import CardBook from '../../components/card-book/card-book';
import book1 from '../../assets/the-design.jpg';
import book2 from '../../assets/dont-me-think.jpg';
import './purchasing.styles.scss';

const Purchasing = () => (
    <div>
      <Header title='You are Purchasing' />
      <Spread selected='1' />
      <div className='container-cards'>
        <CardBook 
          title='The Design of Everyday Things'
          value='15.00'
          pathbook={book1}
        />
        <CardBook 
          title="Don't Make Me Think"
          value='10.00'
          pathbook={book2}
        />
      </div>
      <div className='container-values'>
        <ul className='container-values__items'>
          <li className='container-values__item'>
            <p>SubTotal</p>
            <p>$25.00</p>
          </li>
          <li className='container-values__item'>
            <p>Tax (GST 10%)</p>
            <p>$2.5</p>
          </li>
          <li className='container-values__item'>
            <p>Shipping</p>
            <p>$0.00</p>
          </li>
          <li className='container-values__item line'>
            <div></div>
          </li>
          <li className='container-values__item total'>
            <p>Total amount</p>
            <p>$27.50</p>
          </li>
        </ul>
      </div>
    </div>
);

export default Purchasing;
