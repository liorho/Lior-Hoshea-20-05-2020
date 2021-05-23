import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import UnitsBtn from './components/UnitsBtn';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCityWeather } from '../src/store/actions/cityWeather';
import { getCityByLatLon } from './api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => dispatch(fetchCityWeather(await getCityByLatLon()));
    init();
  }, [dispatch]);

  return (
    <Router>
      <Container style={{ maxWidth: '1500px' }}>
        <Header />
        <Main />
      </Container>
      <UnitsBtn />
    </Router>
  );
}

export default App;
