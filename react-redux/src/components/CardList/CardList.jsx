import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './CardList.css';
import Card from '../Card/Card';
import {fetchCard} from '../../store/actions/index';

function CardList(props) {
  useEffect(() => {
    props.fetchCard();
  }, []);

  return (
    <div className='cardlist-container'>
      <h1 className='text-center'>Welcome to The House of Cards</h1>
      <div className='cardList'>
        {props.cards.map(card => {
          return <Card key={card.code} card={card} />;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  {fetchCard}
)(CardList);
