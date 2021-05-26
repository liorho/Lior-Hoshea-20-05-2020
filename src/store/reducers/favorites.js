import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/actionTypes';

const favorites = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [action.payload, ...state ];
    case REMOVE_FROM_FAVORITES:
      return state.filter((f) => f.weather.id !== action.payload.weather.id);
    default:
      return state;
  }
};

export default favorites;
