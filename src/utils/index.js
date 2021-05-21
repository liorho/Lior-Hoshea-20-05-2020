export const getWeatherIconSrc = (icon) => `https://developer.accuweather.com/sites/default/files/${icon >= 10 ? icon : '0' + icon}-s.png`;

export const getCityPicSrc = (cityName) => `https://api.teleport.org/api/urban_areas/slug:${cityName}/images`;

export const getDayOfTheWeek = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(date);
  return days[d.getDay()];
};
