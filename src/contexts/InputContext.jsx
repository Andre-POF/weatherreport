import React, { createContext, useState } from "react";

export const inputContext = createContext();

export const InputProvider = ({ children }) => {
  const [citta, setCitta] = useState("");
  return (
    <>
      <inputContext.Provider value={{ citta, setCitta }}>
        {children}
      </inputContext.Provider>
    </>
  );
};
