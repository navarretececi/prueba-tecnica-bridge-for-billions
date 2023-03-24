import React, { useState } from "react";
import "./BtnSearch.css";

const BtnSearch = () => {
  const [input, setInput] = useState("");

  const handlerInput = (e) => {
    
    setInput(e.target.value)
    console.log(input)
  };
  return (
    <div>
      <input
        id="searchbox"
        autoComplete="off"
        value={input}
        onChange={handlerInput}
        type="search"
        placeholder="Search"
      />
      <button onClick={()=>setInput("")}>
        Click
      </button>
    </div>
  );
};

export default BtnSearch
