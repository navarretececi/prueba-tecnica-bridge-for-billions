import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [result, setResult] = useState([]);

  return (
    <AppContext.Provider value={{ result, setResult }}>
      {children}
    </AppContext.Provider>
  );
};
