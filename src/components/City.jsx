import React, { useContext } from "react";
import bin from "../assets/bin.png";
import { inputContext } from "../contexts/InputContext";

function City({ city, index }) {
  const { arrToMap, setArrToMap, setSearchedCity, cityInfo } =
    useContext(inputContext);
  function handleDelete() {
    const deleteCityArr = arrToMap.filter((item) => item !== city);
    window.localStorage.setItem("cityArr", JSON.stringify(deleteCityArr));
    setArrToMap(deleteCityArr);
  }

  function handleSelect() {
    setSearchedCity(city);
  }
  return (
    <div
      onClick={handleSelect}
      className="flex hover:shadow-xl  ring-1 cursor-pointer rounded-xl align-center ring-stone-300 w-fit p-2"
    >
      <div className="text-orange-600 flex items-center font-[Montserrat,sans-serif] sm:mx-1 md:mx-3 lg:mx-6 text-xs md:text-sm lg:text-base sm:font-semibold md:font-semibold lg:font-semibold ">
        {city}
      </div>
      <div className="flex items-center ms-auto">
        <button className="rounded-lg p-1" onClick={handleDelete}>
          <img src={bin} alt="bin" className=" w-2 h-2  sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
}

export default City;
