import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Temperature from '../common/Temperature';

function CurrentWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);

  return (
    <>
      {cityWeather.weather.currentConditions ? (
        <>
          <Row className='justify-content-center'>{cityWeather.weather.currentConditions.text}</Row>
          <Row className='text-center font-6'>
            <Temperature temperature={cityWeather.weather.currentConditions.temperature} />
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default CurrentWeather;
