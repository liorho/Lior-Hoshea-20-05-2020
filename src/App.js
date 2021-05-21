import React, { useEffect } from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityWeather } from '../src/store/actions/cityWeather'
// import Loader from '../src/components/common/Loader'
// import Error from '../src/components/common/Error'
function App() {
  const dispatch = useDispatch();
  const cityWeather = useSelector(state => state.cityWeather)
  useEffect(() => {
    // dispatch(fetchCityWeather(cityWeather.id));
  }, []);

  return (
    <Router>
    {/* <Loader/> */}
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
