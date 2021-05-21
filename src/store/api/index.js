import * as api from './api'
const API_KEY = process.env.REACT_APP_API_KEY

const _getCurrentWeather = (cityId) => api.currentConditions.get(`/${cityId}?apikey=${API_KEY}`)

const _getFiveDaysForecast = (cityId) => api.fiveDaysForecast.get(`/${cityId}?apikey=${API_KEY}&metric=true`)

export const getCityWeather = async (cityId) => await Promise.all([_getCurrentWeather(cityId), _getFiveDaysForecast(cityId)])

export const getCitiesAC = async (input) => await api.cities.get(`autocomplete?apikey=${API_KEY}&q=${input}`)