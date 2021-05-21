import React from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useSelector, useDispatch } from 'react-redux';
import WithLoadAndErrorHandler from '../hoc/WithLoadAndErrorHandler';
import { Card, Button } from 'react-bootstrap';
import {addToFavorites, removeFromFavorites} from '../../store/actions/favorites'

function CityWeather() {
  const cityWeather = useSelector((state) => state.cityWeather);
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch()
  const isFavorite = favorites?.some(f => f.weather.id === cityWeather.weather.id)

  const handleClick = () => {
    isFavorite ?
      dispatch(removeFromFavorites(cityWeather)) :
      dispatch(addToFavorites(cityWeather))

  }
  return (
    <WithLoadAndErrorHandler state={cityWeather}>
      {cityWeather.weather.currentConditions ? (
        <Card>
          <Card.Title>{cityWeather.weather.city}</Card.Title>
          <Button onClick={handleClick}>{isFavorite? "Remove From Favorites": "Add to Favorites" }</Button>
          <CurrentWeather />
          <Forecast />
        </Card>
      ) : (
        ''
      )}
    </WithLoadAndErrorHandler>
  );
}

export default CityWeather;
