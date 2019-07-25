import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Card from '../Card/Card';
import {fetchCard} from '../../store/actions/index';

function CardList(props) {
  useEffect(() => {
    props.fetchCard();
  }, []);

  return (
    <div>
      <h1>Welcome to The House of Cards</h1>

      {props.cards.map(card => {
        return <Card card={card} />;
      })}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  {fetchCard}
)(CardList);
