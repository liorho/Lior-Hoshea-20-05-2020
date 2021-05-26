import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import FavoritesBtn from './FavoritesBtn';
import WithLoadAndErrorHandler from '../hoc/WithLoadAndErrorHandler';

function CityWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);

  return (
    <WithLoadAndErrorHandler state={cityWeather}>
      {cityWeather.weather.currentConditions ? (
        <Container className='position-relative mt-3'>
          <Row className='justify-content-center position-relative bg-inherit font-2'>{cityWeather.weather.city}</Row>
          <FavoritesBtn />
          <CurrentWeather />

          <Forecast />
        </Container>
      ) : (
        ''
      )}
    </WithLoadAndErrorHandler>
  );
}

export default CityWeather;
