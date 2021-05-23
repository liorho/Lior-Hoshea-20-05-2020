import * as api from './api';
import { mapCity } from '../utils/mapData';
import { getLatLon } from '../utils';

import { DEFAULT_CITY } from '../constants';

const API_KEY = process.env.REACT_APP_API_KEY;
const NODE_ENV = process.env.REACT_APP_NODE_ENV;

// Dummy Data -->
const dummyTelAutoComplete = require('../data-samples/telAutoComplete.json');
const dummyTelAvivCurrent = require('../data-samples/telAvivCurrent.json');
const dummyTelAvivForecast = require('../data-samples/telAvivForecast.json');
// <--

const _getCurrentWeather = (cityId) => {
  return NODE_ENV === 'DEVELOPMENT' ? { data: dummyTelAvivCurrent } : api.currentConditions.get(`/${cityId}?apikey=${API_KEY}`);
};
const _getFiveDaysForecast = (cityId) => {
  return NODE_ENV === 'DEVELOPMENT' ? { data: dummyTelAvivForecast } : api.fiveDaysForecast.get(`/${cityId}?apikey=${API_KEY}&metric=true`);
};
export const getCityWeather = async (cityId) => await Promise.all([_getCurrentWeather(cityId), _getFiveDaysForecast(cityId)]);

export const getCitiesAC = async (input) => {
  return NODE_ENV === 'DEVELOPMENT' ? { data: dummyTelAutoComplete } : await api.cities.get(`autocomplete?apikey=${API_KEY}&q=${input}`);
};
export const getCityByLatLon = async () => {
  if (NODE_ENV === 'DEVELOPMENT') {
    return DEFAULT_CITY;
  } else {
    try {
      const [lat, lon] = await getLatLon();
      const { data } = await api.getCityByLatLon.get(`search?apikey=${API_KEY}&q=${lat},${lon}`);
      return mapCity(data);
    } catch (error) {
      console.log(error);
      return DEFAULT_CITY;
    }
  }
};
