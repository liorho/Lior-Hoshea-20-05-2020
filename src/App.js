import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCityWeather } from '../src/store/actions/cityWeather';
import { getLatLon } from './utils';
import { getCityByLatLon } from '../src/store/api';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      try {
        const [lat, lon] = await getLatLon();
        // const { id, city, country } = await getCityByLatLon(lat, lon);
        //dummy:
        const { id, city, country } = { city: 'Tel Aviv', country: 'Israel', id: '215854' }
        dispatch(fetchCityWeather(id, city, country));
      } catch (error) {
        console.log(error);
      }
    };

    init();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
