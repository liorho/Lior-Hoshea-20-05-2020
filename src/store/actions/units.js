import { CELSIUS, FAHRENHEIT } from '../../constants';
import { SET_CELSIUS } from '../actions/actionTypes';
import { saveToLocalStorage } from '../../utils';

export const setUnits = (type) => (dispatch) => {
  saveToLocalStorage({ units: type === SET_CELSIUS ? CELSIUS : FAHRENHEIT });
  dispatch({ type });
};
