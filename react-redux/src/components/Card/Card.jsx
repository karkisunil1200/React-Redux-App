import React from 'react';

import './Card.css';
function Card(props) {
  return (
    <div className='card-container'>
      <img src={props.card.image} className='card-img' />
    </div>
  );
}

export default Card;
