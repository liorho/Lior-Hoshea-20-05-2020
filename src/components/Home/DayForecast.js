import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc, getDayOfTheWeek } from '../../utils';
import { useSelector } from 'react-redux';
import {calculateTemperature} from '../../utils'

function DayForecast({forecast}) {
  const { date, temperature, dayIcon, dayText } = forecast
  const units = useSelector(state => state.units)

  return (
    <Card>
      <Card.Img style={{ width: 300 }} src={getWeatherIconSrc(dayIcon)}></Card.Img>
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{getDayOfTheWeek(date)}</Card.Title>
        <Card.Title>{dayText}</Card.Title>
        <Card.Text>
          {calculateTemperature(temperature?.min, units)}° - {calculateTemperature(temperature?.max, units)}°
        </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
    </Card>
  );
}

export default DayForecast;
