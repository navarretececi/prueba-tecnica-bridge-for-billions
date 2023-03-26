import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [result, setResult] = useState([]);

  return (
    <AppContext.Provider value={{ data, setData, result, setResult }}>
      {children}
    </AppContext.Provider>
  );
};
