import { FETCH_CITIES_AC, FETCH_CITIES_AC_SUCCESS, FETCH_CITIES_AC_FAILURE, RESET_CITIES_AC } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  cities: [],
};

const citiesAC = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_AC:
      return { ...state, isLoading: true };
    case FETCH_CITIES_AC_SUCCESS:
      return { isLoading: false, cities: action.payload, error: '' };
    case FETCH_CITIES_AC_FAILURE:
      return { isLoading: false, weather: [], error: action.payload };
    case RESET_CITIES_AC:
      return initialState;
    default:
      return state;
  }
};

export default citiesAC;
