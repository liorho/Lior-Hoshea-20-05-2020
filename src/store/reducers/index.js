import { combineReducers } from 'redux'

import citiesAC from './citiesAC'
import favorites from './favorites'
import cityWeather from './cityWeather'
import units from './units'


export default combineReducers({
    cityWeather,
    favorites,
    citiesAC,
    units,
})