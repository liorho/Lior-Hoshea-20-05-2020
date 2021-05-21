import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/actionTypes';

const favorites = (favorites = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...favorites, action.payload] ;
    case REMOVE_FROM_FAVORITES:
      return favorites.filter(f => f.weather.id !== action.payload.weather.id)
    default:
      return favorites;
  }
};

export default favorites;
