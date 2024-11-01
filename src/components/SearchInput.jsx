import React from "react";
import { useContext } from "react";
import { inputContext } from "../contexts/InputContext";

function SearchInput({ value, setValue }) {
  const { citta, setCitta } = useContext(inputContext);
  const handleChange = (event) => {
    setCitta(event.target.value);
  };

  return (
    <>
      <main className="flex flex-col">
        <section className="flex items-center justify-center">
          <div className="px-2 py-1 w-80 rounded ring-1 ring-stone-300 flex flex-col place-content-around">
            <label>
              <span className="text-xs font-semibold">City</span>
            </label>
            <input
              value={citta}
              onChange={handleChange}
              placeholder="Chose a city"
              className="w-auto placeholder:text-base outline-none "
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchInput;
