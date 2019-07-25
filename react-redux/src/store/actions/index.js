import axios from 'axios';

export const FETCH_CARD_START = 'FETCH_CARD_START';
export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE';

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
      console.log(res.data);
      dispatch({type: FETCH_CARD_SUCCESS, payload: res.data.cards});
    })
    .catch(err => {
      console.log(err);
    });
};
