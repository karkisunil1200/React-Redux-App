import React from 'react';

function SuffleCards() {
  const suffleCards = e => {
    e.preventDefautl();
  };
  return (
    <div>
      <button onClick={SuffleCards}>Suffle Cards</button>
    </div>
  );
}

export default SuffleCards;
