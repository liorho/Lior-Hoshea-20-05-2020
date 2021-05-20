import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedCity: {
    id: '215854',
    name: 'Tel Aviv',
    currentWeather: {
      Temperature: 30,
      icon: 33
    },
    forecast: [
      {
        Date: '2021-05-19T07:00:00+03:00',
        icon: 1,
        Temperature: {
          Minimum: 21.3,
          Maximum: 27.6,
        },
      },
      {
        Date: '2021-05-20T07:00:00+03:00',
        icon: 2,
        Temperature: {
          Minimum: 23,
          Maximum: 28,
        },
      },
      {
        Date: '2021-05-21T07:00:00+03:00',
        icon: 7,
        Temperature: {
          Minimum: 20,
          Maximum: 24,
        },
      },
      {
        Date: '2021-05-22T07:00:00+03:00',
        icon: 1,
        Temperature: {
          Minimum: 27,
          Maximum: 31,
        },
      },
      {
        Date: '2021-05-23T07:00:00+03:00',
        icon: 4,
        Temperature: {
          Minimum: 25,
          Maximum: 28,
        },
      },
    ],
  },
  favoriteCities: [],
  isLoading: false,
  isError: null,
};

const fetchCityStartProcess = (state) => {
  return { ...state, loading: true };
};

const fetchCitiesSuccessProcess = (state, action) => {
  return { ...state, cities: action.cities, loading: false };
};

const fetchCityFailedProcess = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

const toggleCitySelectProcess = (state, action) => {
  let cities = [...state.cities];
  let city = cities.find((c) => c.name === action.cityName);
  city.checked = !city.checked;
  return {
    ...state,
    cities,
    selectedCities: !city.checked ? state.selectedCities.filter((c) => c !== action.cityName) : [...state.selectedCities, action.cityName],
  };
};

const refreshSelectedProcess = (state, action) => {
  let cities = [...state.cities];
  action.cities.forEach((city) => {
    let current = cities.findIndex((c) => c.name === city.name);
    cities[current] = { ...city };
  });
  return { ...state, cities, selectedCities: [], loading: false };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITY_START:
      return fetchCityStartProcess(state);
    case actionTypes.FETCH_CITY_SUCCESS:
      return fetchCitiesSuccessProcess(state, action);
    case actionTypes.FETCH_CITY_FAILED:
      return fetchCityFailedProcess(state, action);
    case actionTypes.TOGGLE_CITY_SELECT:
      return toggleCitySelectProcess(state, action);
    case actionTypes.REFRESH_SELECTED_SUCCESS:
      return refreshSelectedProcess(state, action);
    default:
      return state;
  }
};

export default reducer;
