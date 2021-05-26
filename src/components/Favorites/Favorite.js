import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { getWeatherIconSrc } from '../../utils';
import { setFavoriteToCityWeather } from '../../store/actions/cityWeather';
import Temperature from '../common/Temperature'

function Favorite({ favorite }) {
  const dispatch = useDispatch();

  const {
    weather: {
      city,
      country,
      currentConditions: { temperature, icon },
    },
  } = favorite;

  const handleClick = () => {
    dispatch(setFavoriteToCityWeather(favorite.weather));
  };

  return (
    <LinkContainer to='/home' onClick={handleClick}>
      <Card className='text-center m-1 weather-card cursor-pointer bg-inherit border'>
        <Card.Body className="weather-card-body">
          <Card.Title className="weather-card-item">{city}, {country}</Card.Title>
          <Card.Img className="weather-card-item img" src={getWeatherIconSrc(icon)}></Card.Img>
          <Card.Title className="weather-card-item"><Temperature temperature= {temperature} /></Card.Title>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default Favorite;
