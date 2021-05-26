import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMode } from '../store/actions/mode'
import { SET_DARK_MODE, SET_LIGHT_MODE } from '../store/actions/actionTypes';
import { DARK_MODE } from '../constants';

function ModeBtn() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);
  const toggleMode = () => {
    dispatch(setMode(mode === DARK_MODE ? SET_LIGHT_MODE : SET_DARK_MODE));
  };
  
  return (
    <div className='pl-3'>
    <i onClick={toggleMode} className="fas fa-sun mode-btn cursor-pointer "></i>
    </div>
    );
  }

  export default ModeBtn;