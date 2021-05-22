import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getWeatherIconSrc, getDayOfTheWeek, calculateTemperature } from '../../utils';

function DayForecast({ forecast }) {
  const { date, temperature, dayIcon, dayText } = forecast;
  const units = useSelector((state) => state.units);

  return (
    // <div className="col mb-3" style={{"min-width": "18rem", "max-width":"30rem" }}>
    /* <div class="card text-center"> */
    /* <div class="card-body"> */
      <Card border="light" className='text-center mx-1'>
        <Card.Body>
          <Card.Title>{getDayOfTheWeek(date)}</Card.Title>
          <Card.Img style={{ width: 100 }} src={getWeatherIconSrc(dayIcon)}></Card.Img>
          <Card.Text>
            {calculateTemperature(temperature?.min, units)}° - {calculateTemperature(temperature?.max, units)}°
          </Card.Text>
        </Card.Body>
      </Card>

    // </div>
    // </div>
  );
}

export default DayForecast;
