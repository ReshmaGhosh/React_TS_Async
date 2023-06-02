import { error } from "console";
import React, { useEffect, useState } from "react";

import { Country, NativeName } from "../types/type";

const url = "https://restcountries.com/v3.1/all";

export default function CountryList() {
  // generic type <Type>

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

  // object.keys: array of keys
  // object.entries: key and values
  // object.values

  return (
    <div>
      CountryList
      {countries.map((country) => {
        return (
          <div>
            <p> {country.name.common}</p>
            <p>
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "Unknown"}
            </p>
            <p> native name </p>
            {country.name.nativeName
              ? Object.keys(country.name.nativeName).map(
                  (item: keyof NativeName) =>
                    country.name.nativeName[item].common
                )
              : "no native name"}

            <div>
              {country.currencies &&
                Object.keys(country.currencies).map((currencyCode) => (
                  <div key={currencyCode}>
                    <ul>
                      <li>Currency Code: {currencyCode}</li>
                      <li>
                        Currency Name:
                        {country.currencies[currencyCode].name}
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
