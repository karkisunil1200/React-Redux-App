import React from 'react';

function Card(props) {
  return (
    <div>
      <img src={props.card.image} />
    </div>
  );
}

export default Card;
