import React from 'react';
import { Card } from 'react-bootstrap';
import { getWeatherIconSrc } from '../../utils';
import { setFavoriteToCityWeather } from '../../store/actions/cityWeather';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Favorite({ favorite }) {
  const {
    weather: {
      id,
      city,
      currentConditions: { temperature, icon, text },
    },
  } = favorite;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFavoriteToCityWeather(favorite.weather));
  };
  return (
    <LinkContainer to='/home' style={{ cursor: 'pointer' }} onClick={handleClick}>
      <Card >
        <Card.Img style={{ width: 300 }} src={getWeatherIconSrc(icon)}></Card.Img>
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{city}</Card.Title>
            <Card.Title>{text}</Card.Title>
            <Card.Text>{temperature}°</Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </LinkContainer>
  );
}

export default Favorite;
