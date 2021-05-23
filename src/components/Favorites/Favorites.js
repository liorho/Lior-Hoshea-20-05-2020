import React from 'react';
import Favorite from './Favorite';
import { useSelector } from 'react-redux';
import { CardGroup } from 'react-bootstrap';

import '../../styles/Favorites.style.css'

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      {favorites.length ? (
        <CardGroup className="favorites">
          {favorites.map((f) => (
            <Favorite key={f.weather.id} favorite={f} />
          ))}
        </CardGroup>
      ) : (
      <h1 className="text-center">
        No Favorites Yet
      </h1>

      )}
    </>
  );
}

export default Favorites;
