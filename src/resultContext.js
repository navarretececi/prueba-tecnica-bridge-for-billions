import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [pagination, setPagination] = useState({});
  const [result, setResult] = useState([]);

  return (
    <AppContext.Provider value={{ pagination, setPagination, result, setResult }}>
      {children}
    </AppContext.Provider>
  );
};
