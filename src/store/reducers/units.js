import { SET_FAHRENHEIT, SET_CELSIUS } from '../actions/actionTypes';
import {FAHRENHEIT, CELSIUS } from '../../constants'
import {loadState} from '../../utils'

const initialState = loadState()?.units ? loadState().units : CELSIUS

const units = (units = initialState, action) => {
  switch (action.type) {
    case SET_CELSIUS:
      return CELSIUS;
    case SET_FAHRENHEIT:
      return FAHRENHEIT;
    default:
      return units;
  }
};
export default units;
