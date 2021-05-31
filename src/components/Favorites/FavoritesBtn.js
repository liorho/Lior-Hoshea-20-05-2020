import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '../../store/actions/favorites';

const FavoritesBtn = () => {
  const cityWeather = useSelector((state) => state.cityWeather);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const isFavorite = favorites?.some((f) => f.weather.id === cityWeather.weather.id);

  const handleClick = () => {
    isFavorite ? dispatch(removeFromFavorites(cityWeather)) : dispatch(addToFavorites(cityWeather));
  };
  return (
    <div className='position-absolute top-0 end-0' style={{ cursor: 'pointer', fontSize: '3rem' }} onClick={handleClick}>
      <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
    </div>
  );
};
export default FavoritesBtn;
