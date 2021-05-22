import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_SUCCESS, FETCH_CITY_WEATHER_FAILURE, SET_FAVORITE_TO_CITY_WEATHER } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  weather: {},
};

const cityWeather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER:
      return { ...state, isLoading: true };
    case FETCH_CITY_WEATHER_SUCCESS:
      return { isLoading: false, weather: action.payload, error: '' };
    case FETCH_CITY_WEATHER_FAILURE:
      return { isLoading: false, weather: {}, error: action.payload };
    case SET_FAVORITE_TO_CITY_WEATHER:
      return { isLoading: false, weather: action.payload, error: '' };
    default:
      return state;
  }
};

export default cityWeather;
