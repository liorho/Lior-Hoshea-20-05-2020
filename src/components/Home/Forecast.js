import React from 'react';
import { useSelector } from 'react-redux';
import { CardGroup,Container, Row, CardDeck, CardColumns } from 'react-bootstrap';

import DayForecast from './DayForecast';

function Forecast() {
  const cityWeather = useSelector((state) => state.cityWeather);
  return (
    <>
      {cityWeather.weather?.forecast ? (

        <CardGroup>
          {cityWeather.weather.forecast.map((f, i) => (
            <DayForecast key={i} forecast={f} />
          ))}
          </CardGroup>
      ) : (
        ''
      )}
    </>
  );
}

export default Forecast;
