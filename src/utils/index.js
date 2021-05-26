import { DAYS, CELSIUS, APP_NAME } from '../constants';

export const roundTemperature = (temperature) => Math.round(temperature);

export const getWeatherIconSrc = (icon) => `https://developer.accuweather.com/sites/default/files/${icon >= 10 ? icon : '0' + icon}-s.png`;

export const getDayOfTheWeek = (date) => {
  const d = new Date(date);
  return DAYS[d.getDay()];
};

export const calculateTemperature = (temperature, units) => (units === CELSIUS ? temperature : roundTemperature((temperature * 9) / 5 + 32));

export const getLatLon = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      reject({ error: 'Geolocation is not supported by this browser.' });
    }
  });
};

export const getLocalStorage = () => {
  try {
    const currentLocalStorage = localStorage.getItem(APP_NAME);
    return currentLocalStorage === null ? {} : JSON.parse(currentLocalStorage);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const currentLocalStorage = getLocalStorage();
    if (currentLocalStorage) {
      const updatedLocalStorage = { ...currentLocalStorage, ...state };
      localStorage.setItem(APP_NAME, JSON.stringify(updatedLocalStorage));
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
