import React from 'react';
import Favorite from './Favorite';
import { useSelector } from 'react-redux';
import {CardGroup} from 'react-bootstrap'

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    < >
      {favorites.length ? (
        <CardGroup>
          {favorites.map((f) => (
            <Favorite key={f.weather.id} favorite={f} />
          ))}
        </CardGroup>
      ) : (
        ''
      )}
    </>
  );
}

export default Favorites;
