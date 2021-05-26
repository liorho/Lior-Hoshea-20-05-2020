import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import UnitsBtn from './components/UnitsBtn';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCityWeather } from '../src/store/actions/cityWeather';
import { setMode } from '../src/store/actions/mode';
import { getCityByLatLon } from './api';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  useEffect(() => {
    const init = async () => {
      dispatch(fetchCityWeather(await getCityByLatLon()));
      dispatch(setMode('SET_' + mode));
    };
    init();
  }, [dispatch, mode]);

  return (
    <Router>
      <Container className='bg-inherit color-inherit app'>
        <Header />
        <Main />
      </Container>
      <UnitsBtn />
    </Router>
  );
}

export default App;
