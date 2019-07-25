import axios from 'axios';

export const FETCH_CARD_START = 'FETCH_CARD_START';
export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE';

export const SUFFLE_CARD_START = 'SUFFLE_CARD_START';
export const SUFFLE_CARD_SUCCESS = 'SUFFLE_CARD_SUCCESS';
export const SUFFLE_CARD_FAILURE = 'SUFFLE_CARD_FAILURE';

export const fetchCard = () => dispatch => {
  dispatch({type: FETCH_CARD_START});
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api/deck/new/draw/?count=52',
      {
        headers: {'X-Requested-With': 'JSON'}
      }
    )
    .then(res => {
      dispatch({type: FETCH_CARD_SUCCESS, payload: res.data.cards});
    })
    .catch(err => {
      console.log(err);
    });
};

export const suffleCard = () => dispatch => {
  dispatch({type: SUFFLE_CARD_START});
  axios
    .get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(res => {
      console.log(res.data);
    })
    .catch();
};
