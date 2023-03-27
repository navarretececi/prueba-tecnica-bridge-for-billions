import "./App.css";
import Btn from "./components/bnt/Btn";
import BtnSearch from "./components/bnt/BtnSearch";
import Layout from "./components/Layout.js";
import Main from "./components/Main";
import React from "react";
import { AppContext } from "./resultContext";

function App() {
  const { setInput, setResult, setPagination } = React.useContext(AppContext);

  const handlerClear = () => {
    setResult();
    setInput("");
    setPagination({});
  };

  return (
    <div className="App">
      <Layout>
        <nav className="nav">
          <BtnSearch />
          <Btn btn_text="Clear search" onClick={() => handlerClear()} />
        </nav>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
