import React from 'react';
import DayForecast from './DayForecast';
import { useSelector } from 'react-redux';
import { CardGroup } from 'react-bootstrap';

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
