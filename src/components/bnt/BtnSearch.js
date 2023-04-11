import "./BtnSearch.css";
import Btn from "./Btn";
import React from "react";
import { AppContext } from "../../resultContext";
import { search } from "../../services";

const BtnSearch = () => {
  const {
    input,
    setInput,
    setResult,
    setInputSearched,
    setPagination,
  } = React.useContext(AppContext);

  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const handlerSearch = () => {
    //Search by title: Search by combined “Artist Name - Release Title” title field.
    //Filter by type=release because we only need the artist or album(releases)
    let url = `https://api.discogs.com/database/search?title=${input}&type=release&per_page=20`;

    search(url)
      .then((data) => {
        setPagination(data.pagination);
        setResult(data.results);
        setInputSearched(input);
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
