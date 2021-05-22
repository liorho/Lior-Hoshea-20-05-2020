import * as api from '../api';
import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_SUCCESS, FETCH_CITY_WEATHER_FAILURE, SET_FAVORITE_TO_CITY_WEATHER } from './actionTypes';
import { mapCityWeather } from '../utils/mapCityWeather';

// Dummy -->
let dummyCurrentConditions = require('../../data-samples/telAvivCurrent.json');
const dummyForecast = require('../../data-samples/telAvivForecast.json');
dummyCurrentConditions = dummyCurrentConditions[0];
// --> Dummy

export const fetchCityWeather = (id, city, country) => async (dispatch) => {
  dispatch({
    type: FETCH_CITY_WEATHER,
  });
  try {
    const [currentConditions, fiveDaysForecast] = await api.getCityWeather(id);
    dispatch({
      type: FETCH_CITY_WEATHER_SUCCESS,
      payload: { ...mapCityWeather(currentConditions.data[0], fiveDaysForecast.data), id, city, country },

      // Dummy:
      // payload: { ...mapCityWeather(dummyCurrentConditions, dummyForecast), id, city, country },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CITY_WEATHER_FAILURE,
      payload: error.message,
    });
  }
};

export const setFavoriteToCityWeather = (city) => (dispatch) =>
  dispatch({
    type: SET_FAVORITE_TO_CITY_WEATHER,
    payload: city,
  });
