import * as api from '../../api';
import { FETCH_CITIES_AC, FETCH_CITIES_AC_SUCCESS, FETCH_CITIES_AC_FAILURE, RESET_CITIES_AC } from './actionTypes';
import { mapCitiesAC } from '../../utils/mapData';

export const fetchCitiesAC = (input) => async (dispatch) => {
  dispatch({
    type: FETCH_CITIES_AC,
  });
  try {
    const { data } = await api.getCitiesAC(input);
    dispatch({
      type: FETCH_CITIES_AC_SUCCESS,
      payload: mapCitiesAC(data),
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CITIES_AC_FAILURE,
      payload: error,
    });
  }
};

export const resetCitiesAC = () => (dispatch) => dispatch({ type: RESET_CITIES_AC });
