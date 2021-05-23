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
    <LinkContainer to='/home' style={{ cursor: 'pointer' }} onClick={handleClick}>
      <Card border='light' className='text-center mx-1 favorite' style={{ 'minWidth': '150px', 'maxWidth': '200px' }}>
        <Card.Body className="favorite-card-body">
          <Card.Title className="favorite-card-item">{city}, {country}</Card.Title>
          <Card.Img className="favorite-card-item" style={{ width: 100 }} src={getWeatherIconSrc(icon)}></Card.Img>
          <Card.Title className="favorite-card-item"><Temperature temperature= {temperature} /></Card.Title>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default Favorite;
