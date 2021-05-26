import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc, getDayOfTheWeek } from '../../utils';

import Temperature from '../common/Temperature';

function DayForecast({ forecast }) {
  const { date, temperature, dayIcon } = forecast;

  return (

    <Card border='light' className='text-center m-1 bg-inherit border w-100'>
      <Card.Body className='weather-card-body '>
        <Card.Title className='weather-card-item'>{getDayOfTheWeek(date)}</Card.Title>
        <Card.Img src={getWeatherIconSrc(dayIcon)} className='weather-card-item img' ></Card.Img>
        <Card.Title className='weather-card-item'>
          <Temperature temperature={temperature?.min} /> - <Temperature temperature={temperature?.max} />
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default DayForecast;
