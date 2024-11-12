import React, { useContext } from "react";
import arrow from "../assets/angle-small-right (1).png";
import { inputContext } from "../contexts/InputContext";

const Searchbutton = () => {
  const { citta, setSearchedCity } = useContext(inputContext);

  function handleClick() {
    setSearchedCity(citta);
  }

  return (
    <>
      <section className="flex items-center">
        <button onClick={handleClick} className="h-12 w-12">
          <div className="rounded-full h-12 w-12 bg-orange-600 flex justify-center items-center p-2 mx-2 ">
            <img src={arrow} alt="arrow" className="size-5 top-3" />
          </div>
        </button>
      </section>
    </>
  );
};

export default Searchbutton;
