import React, { useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Searchbutton from "../components/Searchbutton";
import { useState } from "react";

const Toparea = () => {
  const [value, setValue] = useState(() => localStorage.getItem("citta") || "");
  useEffect(() => {
    window.localStorage.setItem("citta", value);
    console.log(value);
  }, [value]);
  return (
    <div className="flex flex-row">
      <SearchInput value={value} setValue={setValue} />
      <Searchbutton />
    </div>
  );
};

export default Toparea;
