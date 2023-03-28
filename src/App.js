import "./App.css";
import Btn from "./components/bnt/Btn";
import BtnSearch from "./components/bnt/BtnSearch";
import Layout from "./components/Layout.js";
import Main from "./components/Main";
import React, { useState } from "react";
import { AppContext } from "./resultContext";

function App() {
  const { setInput, inputSearched, setInputSearched, setResult, setPagination } = React.useContext(AppContext);
  console.log("searched",inputSearched)

  const handlerClear = () => {
    setResult();
    setInputSearched("")
    setInput("");
    setPagination({});
  };

  const showCollection =()=>{
    console.log("mostrar colección")
  }

  return (
    <div className="App">
      <Layout>
        <nav className="nav">
          <div className="container_extras">
            <Btn btn_text="My collection" onClick={() => showCollection()} />
            {inputSearched? <h5 className="no_mg">Your search: {inputSearched}</h5> : null}
          </div>
            
          <div className="container_btns_search">
            <BtnSearch />
            <Btn btn_text="Clear search" onClick={() => handlerClear()} />
          </div>
        </nav>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
