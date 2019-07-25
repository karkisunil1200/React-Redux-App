import {FETCH_CARD_START, FETCH_CARD_SUCCESS} from '../actions';

export const initialState = {
  error: '',
  isFetching: false,
  cards: []
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CARD_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_CARD_SUCCESS:
      console.log(state.universities);
      return {
        ...state,
        isFetching: false,
        error: '',
        cards: payload
      };
    default:
      return state;
  }
};
