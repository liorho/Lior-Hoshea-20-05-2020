import * as api from './api';
import { mapCity } from '../utils/mapCitiesAC';
const API_KEY = process.env.REACT_APP_API_KEY;

const _getCurrentWeather = (cityId) => api.currentConditions.get(`/${cityId}?apikey=${API_KEY}`);

const _getFiveDaysForecast = (cityId) => api.fiveDaysForecast.get(`/${cityId}?apikey=${API_KEY}&metric=true`);

export const getCityWeather = async (cityId) => await Promise.all([_getCurrentWeather(cityId), _getFiveDaysForecast(cityId)]);

export const getCitiesAC = async (input) => await api.cities.get(`autocomplete?apikey=${API_KEY}&q=${input}`);

export const getCityByLatLon = async (lat, lon) => {
  try {
    const { data } = await api.getCityByLatLon.get(`search?apikey=${API_KEY}&q=${lat},${lon}`);
    return mapCity(data);
  } catch (error) {
    console.log(error);
    return { city: 'Tel Aviv', country: 'Israel', id: '215854' };
  }
};
