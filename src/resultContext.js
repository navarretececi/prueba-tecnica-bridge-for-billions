import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [inputSearched, setInputSearched] = useState("");
  const [pagination, setPagination] = useState({});
  const [result, setResult] = useState();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        inputSearched,
        setInputSearched,
        pagination,
        setPagination,
        result,
        setResult,
        showInfo,
        setShowInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
