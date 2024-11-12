import React, { useContext, useEffect } from "react";
import { inputContext } from "../contexts/InputContext";
import { coordinatesApiKey } from "../assets/consts";
import save from "../assets/bookmark.png";

const Hero = () => {
  const {
    searchedCity,
    cityCoordinates,
    setCityCoordinates,
    cityInfo,
    setCityInfo,
    loadCities,
  } = useContext(inputContext);

  useEffect(() => {
    const getCityCoordinates = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${searchedCity}&key=${coordinatesApiKey}`,
          { method: "GET" }
        );
        if (response.ok) {
          const data = await response.json();
          setCityCoordinates(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (searchedCity) getCityCoordinates();
  }, [searchedCity, setCityCoordinates]);

  useEffect(() => {
    const getCityInfo = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${cityCoordinates.results[0].geometry.lat}&longitude=${cityCoordinates.results[0].geometry.lng}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,wind_speed_10m`,
          { method: "GET" }
        );
        if (response.ok) {
          const data = await response.json();
          setCityInfo(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (cityCoordinates && cityCoordinates.results) {
      getCityInfo();
    }
  }, [cityCoordinates, setCityInfo]);

  let cityArr = JSON.parse(window.localStorage.getItem("cityArr")) || [];

  function handleSave() {
    if (!cityArr.includes(searchedCity)) {
      cityArr.push(searchedCity);
      window.localStorage.setItem("cityArr", JSON.stringify(cityArr));
      loadCities();
    }
  }

  return (
    <>
      <section className="ring-1 rounded ring-stone-300 my-3 mb-2 md:mb-5 lg:mb-10 p-3 w-full">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-7xl md:text-5xl sm:text-2xl font-[Montserrat,sans-serif] inline-block text-orange-600 my-2">
            {searchedCity}
          </h1>
          <button
            onClick={handleSave}
            className="flex lg:mx-10 lg:py-2 lg:px-4 md:mx-8 md:py-1 md:px-2 sm:mx-6 sm:py-1 sm:px-2 mx-4 py-0 px-1 rounded lg:font-bold md:font-bold sm:font-bold bg-[#024CAA] hover:bg-[#091057]"
          >
            <div className="flex items-center p-2 sm:p-1">
              <img
                src={save}
                className="lg:w-3 md:w-2 sm:w-2 w-2 "
                alt="savebookmark"
              />
              <span className="text-white lg:text-base hidden sm:block md:text-sm sm:text-xs text-xs ml-2">
                Save City
              </span>
            </div>
          </button>
        </div>
        <div className="flex my-4 justify-start gap-x-6 sm:gap-x-0 sm:justify-around flex-wrap">
          <div className="flex flex-col sm:flex-row justify-around  sm:w-1/2">
            <div className="my-4">
              <p className="text-sm md:text-base mt-2 font-[Montserrat,sans-serif]">
                {" "}
                Temperature
              </p>
              <p className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                {cityInfo && cityInfo.current
                  ? `${cityInfo.current.temperature_2m}`
                  : "-"}
                <span className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                  ºC{" "}
                </span>
              </p>
            </div>
            <div className="my-4">
              <p className="text-sm md:text-base mt-2 font-[Montserrat,sans-serif]">
                Precipitation
              </p>
              <p className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                {cityInfo && cityInfo.current
                  ? `${cityInfo.current.precipitation}`
                  : "0"}
                <span className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                  mm{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around   sm:w-1/2 ">
            <div className="my-4">
              <p className="text-sm md:text-base mt-2 font-[Montserrat,sans-serif]">
                Humidity
              </p>
              <p className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                {cityInfo && cityInfo.current
                  ? `${cityInfo.current.relative_humidity_2m}`
                  : "0"}
                <span className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                  %{" "}
                </span>
              </p>
            </div>
            <div className="my-4">
              <p className="text-sm md:text-base mt-2 font-[Montserrat,sans-serif]">
                Wind
              </p>
              <p className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                {cityInfo && cityInfo.current
                  ? `${cityInfo.current.wind_speed_10m}`
                  : "0"}
                <span className="lg:text-4xl md:text-2xl font-[Palanquin,sans-serif] font-bold">
                  Km/h{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
