import { CELSIUS, FAHRENHEIT } from '../../constants'
import {SET_CELSIUS} from '../actions/actionTypes'
import {saveState} from '../../utils'

export const setUnits = (type) => (dispatch) => {
  saveState({units: type === SET_CELSIUS ? CELSIUS : FAHRENHEIT})
  dispatch({ type });
};
