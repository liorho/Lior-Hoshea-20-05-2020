import * as api from './api'
const API_KEY = process.env.REACT_APP_API_KEY

export const getCurrentWeather = async (cityId) => {
  try {
    const {data} = await api.currentConditions.get(`/${cityId}?apikey=${API_KEY}`)
    return data[0]
  } catch (error) {
    return {error}
  }
}

export const getFiveDaysForecast = async (cityId) => {
  try {
    const { data } = await api.fiveDaysForecast.get(`/${cityId}?apikey=${API_KEY}&metric=true`)
    return data
  } catch (error) {
    return {error}
  }

}

export const getAutoCompleteCities = async (input) => {
  try {
    const { data } = await api.cities.get(`autocomplete?apikey=${API_KEY}&q=${input}`)
    return data
  } catch (error) {
    return {error}
  }
}