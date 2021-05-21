import { combineReducers } from 'redux'

import citiesAC from './citiesAC'
import favorites from './favorites'
import cityWeather from './cityWeather'

export default combineReducers({
    cityWeather,
    favorites,
    citiesAC,
})