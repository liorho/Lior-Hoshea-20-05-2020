import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes';

export const addToFavorites = (city) => (dispatch) =>
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: city,
  });

export const removeFromFavorites = (city) => (dispatch) =>
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: city,
  });
