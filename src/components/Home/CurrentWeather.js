import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc } from '../../utils';
import { useSelector } from 'react-redux';
import {calculateTemperature} from '../../utils'

function CurrentWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);
  const units = useSelector(state => state.units)

  return (
    <>
      {cityWeather.weather.currentConditions ? (
        <>
          <Card.Img style={{ width: 100 }} src={getWeatherIconSrc(cityWeather.weather.currentConditions.icon)}></Card.Img>
          <Card.Body>
            <Card.Title>{cityWeather.weather.currentConditions.text}</Card.Title>
            <Card.Text>{calculateTemperature(cityWeather.weather.currentConditions.temperature, units)}°</Card.Text>

          </Card.Body>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default CurrentWeather;
