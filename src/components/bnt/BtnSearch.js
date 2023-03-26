import "./BtnSearch.css";
import Btn from "./Btn";
import React, { useState } from "react";
import { AppContext } from "../../resultContext";
import { search } from "../../services";

const BtnSearch = () => {
  const [input, setInput] = useState("");
  const { result, setResult, setPagination } = React.useContext(AppContext);

  const handlerInput = (e) => {
    setInput(e.target.value);
  };
  console.log("result", result);
  const handlerSearch = () => {
    search(input)
      .then((data) => {
        console.log("data", data);
        setPagination(data.pagination);
        setResult(data.results);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container_search">
      <input
        id="searchbox"
        className="input"
        autoComplete="off"
        value={input}
        onChange={handlerInput}
        type="search"
        placeholder="Search"
      />
      <Btn btn_text="Search" onClick={handlerSearch} />
    </div>
  );
};

export default BtnSearch;
