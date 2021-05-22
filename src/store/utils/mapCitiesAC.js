export const mapCity = (city) => {
  return { id: city.Key, city: city.LocalizedName, country: city.Country.LocalizedName }
}

export const mapCitiesAC = (cities) =>
  cities.map(mapCity);
