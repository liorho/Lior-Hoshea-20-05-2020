import { combineReducers } from 'redux'

import citiesAC from './citiesAC'
import favorites from './favorites'
import cityWeather from './cityWeather'
import units from './units'
import mode from './mode'


export default combineReducers({
    cityWeather,
    favorites,
    citiesAC,
    units,
    mode
})