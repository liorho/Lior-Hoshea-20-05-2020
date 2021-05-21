export const mapCitiesAC = (cities) =>
  cities.map((c) => {
    return { id: c.Key, city: c.LocalizedName, country: c.Country.LocalizedName };
  });
