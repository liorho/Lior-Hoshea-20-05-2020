import { SET_DARK_MODE, SET_LIGHT_MODE } from '../actions/actionTypes';
import {DARK_MODE, LIGHT_MODE } from '../../constants'
import {getLocalStorage} from '../../utils'

const initialState = getLocalStorage()?.mode ? getLocalStorage().mode : LIGHT_MODE

const mode = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_MODE:
      return LIGHT_MODE;
    case SET_DARK_MODE:
      return DARK_MODE;
    default:
      return state;
  }
};
export default mode;
