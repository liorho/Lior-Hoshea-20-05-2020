import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc, getDayOfTheWeek } from '../../utils';

import Temperature from '../common/Temperature'

function DayForecast({ forecast }) {
  const { date, temperature, dayIcon } = forecast;

  return (
      <Card border="light" className='text-center mx-1 day-forecast-card' >
        <Card.Body className="day-forecast-card-body">
          <Card.Title className="day-forecast-card-item">{getDayOfTheWeek(date)}</Card.Title>
          <Card.Img style={{ width: "6rem" }} src={getWeatherIconSrc(dayIcon)} className="day-forecast-card-item"></Card.Img>
        <Card.Title className="day-forecast-card-item">
          <Temperature temperature={temperature?.min}/> - <Temperature temperature={temperature?.max}/>
          </Card.Title>
        </Card.Body>
    </Card>
  );
}

export default DayForecast;
