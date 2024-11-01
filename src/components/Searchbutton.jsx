import React, { useContext, useEffect, useState } from "react";
import arrow from "../assets/angle-small-right (1).png";
import { inputContext } from "../contexts/InputContext";
import { apiUrl } from "../assets/consts";

const Searchbutton = ({ value }) => {
  const { citta, setCitta } = useContext(inputContext);
  const [searchedCity, setSearchedCity] = useState("");
  const [allCities, setAllCities] = useState();

  useEffect(() => {
    const getCities = async () => {
      try {
        const response = await fetch(`${apiUrl}`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setAllCities(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCities();
  }, [searchedCity]);

  function handleClick() {
    setSearchedCity(citta);
  }

  return (
    <section className="flex items-center">
      <button onClick={handleClick} className="h-12 w-12">
        <div className="rounded-full h-12 w-12 bg-orange-600 flex justify-center items-center p-2 mx-2 ">
          <img src={arrow} alt="arrow" className="size-5 top-3" />
        </div>
      </button>
    </section>
  );
};

export default Searchbutton;
