import axios from 'axios'

export const cities = axios.create({
  baseURL: 'http://dataservice.accuweather.com/locations/v1/cities',
})

export const currentConditions = axios.create({
  baseURL: 'http://dataservice.accuweather.com/currentconditions/v1',
})

export const fiveDaysForecast = axios.create({
  baseURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day',
})

export const getCityByLatLon = axios.create({
  baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition',
})