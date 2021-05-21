import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc } from '../../utils';
import { useSelector } from 'react-redux';

function CurrentWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);

  return (
    <>
      {cityWeather.weather.currentConditions ? (
        <>
          <Card.Img style={{ width: 100 }} src={getWeatherIconSrc(cityWeather.weather.currentConditions.icon)}></Card.Img>
          <Card.Body>
            <Card.Title>{cityWeather.weather.currentConditions.text}</Card.Title>
            <Card.Text>{cityWeather.weather.currentConditions.temperature}°</Card.Text>

          </Card.Body>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default CurrentWeather;
