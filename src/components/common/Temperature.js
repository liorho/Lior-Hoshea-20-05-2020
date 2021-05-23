import React from 'react';
import { useSelector } from 'react-redux';
import {calculateTemperature} from '../../utils';

function Temperature({ temperature }) {
  const units = useSelector((state) => state.units);
  return <span>{calculateTemperature(temperature, units)}°</span>;
}

export default Temperature;
