import "./Nav.css";
import Btn from "./bnt/Btn";
import BtnSearch from "./bnt/BtnSearch";
import React from "react";
import { AppContext } from "../resultContext";
import { showCollection } from "../services";

const Nav = () => {
  const {
    setInput,
    inputSearched,
    setInputSearched,
    setResult,
    setPagination,
  } = React.useContext(AppContext);

  const handlerClear = () => {
    setResult();
    setInputSearched("");
    setInput("");
    setPagination({});
  };

  const handlerShowCollection = () => {
    let url = `https://api.discogs.com/users/navarretececi/collection/folders/1/releases?sort=added&sort_order=desc&per_page=20`;

    showCollection(url)
      .then((data) => {
        setPagination(data.pagination);

        let collection_result = data.releases.map((e) => {
          return e.basic_information;
        });
        
        setResult(collection_result);
        setInputSearched("Collection All");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="nav">
      {inputSearched ? (
        <h5 className="search_results">Your search: {inputSearched}</h5>
      ) : null}

      <div className="container_btns">
        <Btn btn_text="My collection" onClick={() => handlerShowCollection()} />
        <div className="container_btns_search">
          <BtnSearch />
          <Btn btn_text="Clear search" onClick={() => handlerClear()} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
