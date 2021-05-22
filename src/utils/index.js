import { DAYS, CELSIUS } from '../constants';

export const roundTemperature = (temperature) => Math.round(temperature);

export const getWeatherIconSrc = (icon) => `https://developer.accuweather.com/sites/default/files/${icon >= 10 ? icon : '0' + icon}-s.png`;

export const getCityPicSrc = (cityName) => `https://api.teleport.org/api/urban_areas/slug:${cityName}/images`;

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
