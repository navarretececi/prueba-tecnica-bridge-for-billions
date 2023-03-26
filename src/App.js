import './App.css'
import Btn from './components/bnt/Btn';
import BtnSearch from './components/bnt/BtnSearch';
import Body from './components/Body.js'
import Main from './components/Main';
import React from "react";
import { AppContext } from './resultContext';

function App() {
  const { setResult } = React.useContext(AppContext);

  return (
    <div className="App">
       <Body>
        <nav className="nav">
          <BtnSearch />
          <Btn 
            btn_text="Clear search"
            onClick={()=>setResult([])}
          />
        </nav>
        <Main />
       </Body>
    </div>
  );
}

export default App;
