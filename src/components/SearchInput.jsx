import React from "react";
import { useContext } from "react";
import { inputContext } from "../contexts/InputContext";

function SearchInput() {
  const { citta, setCitta, setSearchedCity } = useContext(inputContext);

  const handleChange = (event) => {
    setCitta(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key !== "Enter") {
      return;
    } else {
      setSearchedCity(citta);
    }
  };

  return (
    <>
      <main className="flex flex-col">
        <section className="flex items-center justify-center">
          <div className="px-2 py-1 w-40 sm:w-48 md:w-64 lg:w-80 rounded ring-1 ring-stone-300 flex flex-col place-content-around">
            <label>
              <span className="text-xs font-[Montserrat,sans-serif] font-semibold">
                City
              </span>
            </label>
            <input
              value={citta}
              onChange={handleChange}
              onKeyDown={handleEnter}
              placeholder="Choose a city"
              className="w-auto placeholder:text-sm sm:placeholder:text-base outline-none font-[Montserrat,sans-serif] "
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchInput;
