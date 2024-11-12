import React, { createContext, useState } from "react";

export const inputContext = createContext();

export const InputProvider = ({ children }) => {
  const [citta, setCitta] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [cityCoordinates, setCityCoordinates] = useState("");
  const [cityInfo, setCityInfo] = useState("");
  let [arrToMap, setArrToMap] = useState([]);
  const loadCities = () => {
    const savedCities =
      JSON.parse(window.localStorage.getItem("cityArr")) || [];
    setArrToMap(savedCities);
  };

  return (
    <>
      <inputContext.Provider
        value={{
          arrToMap,
          setArrToMap,
          loadCities,
          citta,
          setCitta,
          searchedCity,
          setSearchedCity,
          cityCoordinates,
          setCityCoordinates,
          cityInfo,
          setCityInfo,
        }}
      >
        {children}
      </inputContext.Provider>
    </>
  );
};
