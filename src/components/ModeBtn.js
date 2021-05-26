import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

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
    <Button variant='outline-success' onClick={toggleMode}>
      {mode === DARK_MODE ? 'LIGHT' : 'DARK'}
    </Button>
  );
}

export default ModeBtn;
