import { DARK_MODE, LIGHT_MODE, DARK_COLOR, LIGHT_COLOR } from '../../constants'
import {SET_DARK_MODE} from '../actions/actionTypes'
import {saveToLocalStorage} from '../../utils'

export const setMode = (type) => (dispatch) => {
  saveToLocalStorage({ mode: type === SET_DARK_MODE ? DARK_MODE : LIGHT_MODE })

  const body = document.querySelector('body');
  body.style.backgroundColor = type === SET_DARK_MODE ? DARK_COLOR : LIGHT_COLOR
  body.style.color = type === SET_DARK_MODE ? LIGHT_COLOR : DARK_COLOR

  dispatch({ type });
};
