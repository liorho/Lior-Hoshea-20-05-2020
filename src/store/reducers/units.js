import { SET_FAHRENHEIT, SET_CELSIUS } from '../actions/actionTypes';
import {FAHRENHEIT, CELSIUS } from '../../constants'
import {getLocalStorage} from '../../utils'

const initialState = getLocalStorage()?.units ? getLocalStorage().units : CELSIUS

const units = (state = initialState, action) => {
  switch (action.type) {
    case SET_CELSIUS:
      return CELSIUS;
    case SET_FAHRENHEIT:
      return FAHRENHEIT;
    default:
      return state;
  }
};
export default units;
