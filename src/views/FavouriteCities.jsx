import React, { useContext, useEffect } from "react";
import City from "../components/City";
import { inputContext } from "../contexts/InputContext";

const FavouriteCities = () => {
  const { arrToMap, setArrToMap } = useContext(inputContext);

  const loadCities = () => {
    const savedCities =
      JSON.parse(window.localStorage.getItem("cityArr")) || [];
    setArrToMap(savedCities);
  };

  useEffect(() => {
    loadCities();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-row flex-wrap w-full gap-2 sm:gap-4 md:gap-8 lg:gap-x-8 lg:gap-y-6 ">
        {arrToMap.map((city, index) => {
          return <City city={city} index={index} arrToMap={arrToMap} />;
        })}
      </div>
    </>
  );
};

export default FavouriteCities;
