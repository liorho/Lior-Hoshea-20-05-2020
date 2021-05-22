import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherIconSrc, getDayOfTheWeek, calculateTemperature } from '../../utils';

function DayForecast({ forecast }) {
  const { date, temperature, dayIcon, dayText } = forecast;
  const units = useSelector((state) => state.units);

  return (
      <Card border="light" className='text-center mx-1 day-forecast-card' >
        <Card.Body className="day-forecast-card-body">
          <Card.Title className="day-forecast-card-item">{getDayOfTheWeek(date)}</Card.Title>
          <Card.Img style={{ width: "6rem" }} src={getWeatherIconSrc(dayIcon)} className="day-forecast-card-item"></Card.Img>
          <Card.Title className="day-forecast-card-item">
            {calculateTemperature(temperature?.min, units)}° - {calculateTemperature(temperature?.max, units)}°
          </Card.Title>
        </Card.Body>
    </Card>
  );
}

export default DayForecast;
