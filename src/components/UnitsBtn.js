import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CELSIUS, FAHRENHEIT } from '../constants';
import { setUnits } from '.././store/actions/units';
import { SET_FAHRENHEIT, SET_CELSIUS } from '.././store/actions/actionTypes';

function UnitsBtn() {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);

  const ToggleUnits = () => {
    dispatch(setUnits(units === CELSIUS ? SET_FAHRENHEIT : SET_CELSIUS));
  };
  
  return (
    <span onClick={ToggleUnits} style={{ cursor: 'pointer', border: '1px solid black' }} className='p-1 position-absolute top-50 end-0'>
      <span className={units === FAHRENHEIT ? 'text-muted' : ''}>°C</span>
      <span className='text-muted'> / </span>
      <span className={units === CELSIUS ? 'text-muted' : ''}>°F</span>
    </span>
  );
}

export default UnitsBtn;
