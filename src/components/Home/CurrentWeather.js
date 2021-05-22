import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { calculateTemperature } from '../../utils'

function CurrentWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);
  const units = useSelector(state => state.units)

  return (
    <>
      {cityWeather.weather.currentConditions ? (
        <>
            <Row className='justify-content-center'>{cityWeather.weather.currentConditions.text}</Row>
            <Row className='justify-content-center' style={{fontSize: "8rem"}}>{calculateTemperature(cityWeather.weather.currentConditions.temperature, units)}°</Row>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default CurrentWeather;
