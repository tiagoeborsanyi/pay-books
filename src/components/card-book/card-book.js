import React from 'react';

import './card-book.styles.scss';

const CardBook = ({ title, value, pathbook }) => (
  <div className='cardbook'>
    <img src={pathbook} alt='book1' />
    <div className='cardbook__collumn2'>
      <p className='cardbook__title'>{title}</p>
      <div>
        <span className="material-icons cardbook__remove">remove</span>
        <span className='cardbook__numberbooks'>1</span>
        <span className="material-icons cardbook__add">add</span>
      </div>
    </div>
    <div className='cardbook__collumn3'>
      <p className='cardbook__value'>$ {value}</p>
      <span className="material-icons cardbook__clear">clear</span>
    </div>
  </div>
);

export default CardBook;
