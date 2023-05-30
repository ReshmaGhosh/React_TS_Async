import { error } from "console";
import React, { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
  };
  capital: string;
  population: number;
};
const url = "https://restcountries.com/v3.1/all";

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }
  console.log(countries);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Country List</h1>
      {countries.map((country) => {
        return (
          <div>
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        );
      })}
    </div>
  );
}
