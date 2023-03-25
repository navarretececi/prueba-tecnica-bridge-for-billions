import './App.css'
import BtnSearch from './components/bnt/BtnSearch';
import Body from './components/Body.js'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
       <Body>
        <BtnSearch />
        <Main />
       </Body>
    </div>
  );
}

export default App;
